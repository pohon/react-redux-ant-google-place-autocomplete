import { combineReducers } from "redux";
import pingpong from "./pingpong";
import autocomplete from "./autocomplete";

const rootReducer = combineReducers({
  pingpong,
  autocomplete
});

export default rootReducer;
