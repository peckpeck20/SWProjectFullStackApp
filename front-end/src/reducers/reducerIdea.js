import {GET_ALL_IDEAS} from "../actions/actions";

export default function (state = {
  idea: "ideatest"
}, action) {
  switch (action.type) {
    case GET_ALL_IDEAS:
      return {
        ...state,
        ideaList: action.payload
      };
    default:
      return state;
  }
}