const URL =  'http://localhost:5000';

type options = {
  [key:string]: string
}

function fetchRequest(path: string, options?: options) {
  return fetch(URL + path, options)
      .then(res => res.status < 400 ? res : Promise.reject(res))
      .then(res => res.status !== 204 ? res.json() : res)
      .then(res => {
        console.log('requested', res);
        return res
      })
      .catch(err => console.error(err))

}

export function getPosts() {
  return fetchRequest('/');
}
