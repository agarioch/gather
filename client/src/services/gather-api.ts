// import { useAuth0 } from '@auth0/auth0-react';
import { Response, PostReq, Reply } from '../types';

const URL = process.env.REACT_APP_SERVER_URL;

type options = {};

function fetchRequest(path: string, options?: options) {
  return fetch(URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .then((res) => {
      console.log('DEVELOPMENT:API-RESPONSE', res);
      return res;
    })
    .catch((err) => console.error(err));
}

export function getPosts() {
  return fetchRequest('/posts');
}
export function getPost(id: string) {
  return fetchRequest(`/posts/${id}`);
}
export function postUpvote(id: string, email: string) {
  return fetchRequest(`/posts/${id}/upvote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email }),
  });
}
export function postReply(id: string, reply: Reply) {
  return fetchRequest(`/posts/${id}/reply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reply),
  });
}
export function postPost(post: PostReq) {
  return fetchRequest('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
}
export function postResponse(surveyId: string, response: Response) {
  return fetchRequest(`/posts/${surveyId}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(response),
  });
}
export function getResponses() {
  return fetchRequest('/responses');
}
export function getSurveyResponses(id: string) {
  return fetchRequest(`/posts/${id}/responses`);
}
export function getUsers() {
  return fetchRequest('/users');
}
export function getUser(email: string) {
  return fetchRequest(`/users/${email}`);
}
export function postStatus(id: string, status: string) {
  return fetchRequest(`/posts/${id}/status`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: status }),
  });
}
export function deletePost(id: string) {
  return fetchRequest(`/posts/${id}`, {
    method: 'DELETE',
  });
}
