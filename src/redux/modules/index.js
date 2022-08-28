import { combineReducers } from "redux";
import pingpong from "./pingpong";
import autocomplete from "./autocomplete";
import searchHistory from "./searchHistory";

const rootReducer = combineReducers({
  pingpong,
  autocomplete,
  searchHistory
});

export default rootReducer;
