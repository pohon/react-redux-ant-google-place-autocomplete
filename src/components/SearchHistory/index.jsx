import { Tag } from "antd";
import { connect } from "react-redux";

const SearchHistory = ({ searchHistory }) => {

  return (
    <div className="pt-96">
      {
        searchHistory?.list?.map((historyObj, historyIndex) => (
          <Tag key={`history-${historyIndex}`}>
            <a target="_blank" href={`https://www.google.com/maps/place/?q=place_id:${historyObj.place_id}`} rel="noreferrer">{historyObj?.structured_formatting?.main_text}</a>
          </Tag>
        ))
      }
    </div>
  );
}

export default connect(states => states)(SearchHistory);