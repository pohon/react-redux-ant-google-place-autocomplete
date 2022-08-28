import { useCallback } from "react";
import { connect } from "react-redux";
import { addHistory } from "../../../redux/modules/searchHistory";

const LinkToMap = ({ data, addHistory }) => {

  const handleClick = useCallback(() => {
    addHistory(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <a onClick={handleClick} target="_blank" href={`https://www.google.com/maps/place/?q=place_id:${data.place_id}`} rel="noreferrer">{data.description}</a>
  )

}

export default connect(undefined, { addHistory })(LinkToMap);