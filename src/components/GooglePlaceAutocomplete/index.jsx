import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ping } from '../../redux/modules/pingpong';

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const GooglePlaceAutocomplete = ({ isPinging, ping }) => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <div className='border-0 pt-0'>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input type="text" name="price" id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-80 md:w-96 px-12 py-3 text-base border-gray-300 rounded-full shadow-xl"
            placeholder="Select places" />
        </div>
        <div>{`is pinging: ${isPinging}`}</div>
        <button onClick={ping}>ping</button>
      </div>
    </AutoComplete>
  );
};

export default connect(({ isPinging }) => ({ isPinging }), { ping })(GooglePlaceAutocomplete);