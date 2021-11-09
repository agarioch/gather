const URL =  'http://localhost:5000';

type options = {}

function fetchRequest(path: string, options?: options) {
  return fetch(URL + path, options)
      .then(res => res.status < 400 ? res : Promise.reject(res))
      .then(res => res.status !== 204 ? res.json() : res)
      .catch(err => console.error(err))

}

export function getPosts() {
  return fetchRequest('/');
}
export function getPrivate() {
  return fetchRequest('/', {
    headers: {authorization: 'Bearer '}
  });
}
