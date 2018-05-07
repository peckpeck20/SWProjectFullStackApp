import {GET_ALL_IDEAS, IDEA_CREATE} from "../actions/actions";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ALL_IDEAS:
      return {
        ...state,
        ideaList: action.payload
      };
    case IDEA_CREATE:
      return {
        ...state,
        newIdea: action.payload
      };
    default:
      return state;
  }
}