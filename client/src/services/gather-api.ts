import { useAuth0 } from '@auth0/auth0-react';

const URL = process.env.REACT_APP_SERVER_URL;

type options = {};

function fetchRequest(path: string, options?: options) {
  return fetch(URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => console.error(err));
}

export function getPosts() {
  return fetchRequest('/posts');
}
