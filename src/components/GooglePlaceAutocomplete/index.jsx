import { AutoComplete } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPlaces } from '../../redux/modules/autocomplete';
import LinkToMap from './components/LinkToMap';

const GooglePlaceAutocomplete = ({ autocomplete, fetchPlaces }) => {

  // states
  const [options, setOptions] = useState([]);

  useEffect(() => {

    if (autocomplete.loaded) {
      setOptions(autocomplete.data?.predictions?.map(datum => ({
        value: datum['place_id'],
        label: (
          <LinkToMap data={datum} />
        )
      })) || [])
    }
    else {
      setOptions([])
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autocomplete.loaded])

  return (
    <AutoComplete
      options={options}
      onSearch={input => { if (input) fetchPlaces(input); }}
    >
      <div className='border-0 pt-0'>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            type="text"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-80 md:w-96 px-12 py-3 text-base border-gray-300 rounded-full shadow-xl"
            placeholder="Input search here"
          />
        </div>
      </div>
    </AutoComplete>
  );
};

export default connect(states => states, { fetchPlaces })(GooglePlaceAutocomplete);