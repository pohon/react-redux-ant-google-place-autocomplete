import { combineReducers } from "redux";
import autocomplete from "./autocomplete";
import searchHistory from "./searchHistory";

const rootReducer = combineReducers({
  autocomplete,
  searchHistory
});

export default rootReducer;
