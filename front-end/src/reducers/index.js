import { combineReducers } from "redux";
import reducerIdea from "./reducerIdea";

const rootReducer = combineReducers({
  idea: reducerIdea,
});

export default rootReducer;