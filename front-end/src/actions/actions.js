//actions for redux
import axios from "axios";

export const GET_ALL_IDEAS = "get_all_ideas";
export const GET_ALL_COMMENTS = "get_all_comments";
export const IDEA_CREATE = "idea_create";
export const IDEA_DELETE = "idea_delete";

const ROOT_URL = 'http://localhost:8000/api';

function receiveData(request, json) {
  return {type: request, payload: json}
}

export function getAllIdeas(dispatch) {
  return axios
    .get(`${ROOT_URL}/idea`)
    .then((response) => dispatch(receiveData(GET_ALL_IDEAS, response.data)));
}

export function getAllComments(dispatch) {
  return axios
    .get(`${ROOT_URL}/comment`)
    .then((response) => dispatch(receiveData(GET_ALL_COMMENTS, response.data)));
}

// export function ideaCreate(value, dispatch) {   return
// axios.post(`${ROOT_URL}/idea`, value).then((response) =>
// dispatch(receiveData(IDEA_CREATE, response.data))); }

export function ideaCreate(newIdea) {
  return {type: IDEA_CREATE, payload: newIdea}
}

export function ideaDelete(id, dispatch) {
  return axios
    .delete(`${ROOT_URL}/idea/${id}`)
    .then((response) => dispatch(receiveData(IDEA_DELETE, response.data)));
}
