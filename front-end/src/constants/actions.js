//actions for redux
import axios from "axios";

export const GET_ALL_IDEAS = "get_all_ideas";
export const GET_IDEA = "idea_get";
export const GET_ALL_COMMENTS = "get_all_comments";
export const IDEA_CREATE = "idea_create";
export const IDEA_UPDATE = "idea_update";
export const IDEA_DELETE = "idea_delete";

const ROOT_URL = 'localhost:8000';

function receiveData(request, json) {
  return {
    type: request,
    payload: json
  }
}

export function getAllIdeas(dispatch) {
  return axios.get(`${ROOT_URL}`).then((response) => dispatch(receiveData(GET_ALL_IDEAS, response.data)));
}

export function getIdea(id, dispatch) {
  return axios.get(`${ROOT_URL}/${id}`).then((response) => dispatch(receiveData(GET_IDEA, response.data)));
}

export function getAllComments(id, dispatch) {
  return axios.get(`${ROOT_URL}/${id}/comments`).then((response) => dispatch(receiveData(GET_ALL_COMMENTS, response.data)));
}

export function ideaCreate(value, dispatch) {
  return axios.post(`${ROOT_URL}`, value).then((response) => dispatch(receiveData(IDEA_CREATE, response.data)));
}

export function ideaUpdate(id, value, dispatch) {
  return axios.put(`${ROOT_URL}/${id}`, value).then((response) => dispatch(receiveData(IDEA_UPDATE, response.data)));
}

export function ideaDelete(id, dispatch) {
  return axios.delete(`${ROOT_URL}/${id}`).then((response) => dispatch(receiveData(IDEA_DELETE, response.data)));
}
