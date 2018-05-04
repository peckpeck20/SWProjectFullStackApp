import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import reducerIdea from "./reducerIdea";

const rootReducer = combineReducers({idea: reducerIdea, IdeaNewForm: formReducer});

export default rootReducer;