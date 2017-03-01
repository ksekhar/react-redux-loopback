import 'whatwg-fetch';

export const LOGIN = 'LOGIN_PENDING';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT_PENDING';
export const SET_FORM_FIELD = 'SET_FORM_FIELD';

const FORM_FIELD_MAX_LENGTH = 100;


const post = (endpoint, body) =>
  fetch(`/api/${endpoint}`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      return response.json();
    });

export function setFormField({target: {name, value}}) {
  const slicedValue = value.slice(0, FORM_FIELD_MAX_LENGTH);
  return {
    type: SET_FORM_FIELD,
    payload: {name, slicedValue}
  };
}

// export function login(fields) {
//   return () => ({
//     type: 'LOGIN',
//     payload: {
//       promise:
//         post('users/login', fields)
//         .then((value) => {
//           if (value.error) {
//             throw value.error;
//           } else {
//             return value;
//           }
//         }, (reason) => {
//           console.log(reason);
//         })
//         .catch((response) => {
//           if (response.status === 401) {
//             console.log('oh no');
//           }
//           throw response;
//         })
//     }
//   });
// }
export function login(fields) {
  post('users/login', fields)
    .then(res => console.log(res));
  return { type: LOGIN };
}

export function logout(token) {
  return () => ({
    type: 'LOGOUT',
    payload: {
      promise: fetch(`/api/users/logout?access_token=${token}`, {
        method: 'post',
        credentials: 'include'
      })

    }
  });
}
