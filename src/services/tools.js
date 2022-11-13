import cookie from 'react-cookies';

export const getTokenCookie = () => cookie.load('jwttoken');
export const removeTokenCookie = () => cookie.remove('jwttoken', { path: '/' });
export const getAuthHeader = () => {
  return { headers: { Authorization: `Bearer ${getTokenCookie()}` } };
};
// export const getTokenCookie = () => cookie.load('jwttoken');
// return { headers: { Authorization: `Bearer ${getTokenCookie()}` } };

/* const AUTH_TOKEN = document.cookie
  .split('; ')
  .find((row) => row.startsWith('jwttoken'))
  ?.split('=')[1];

export const getTokenCookie = () => cookie.load('jwttoken');
export const removeTokenCookie = () => cookie.remove('jwttoken', { path: '/' });
export const getAuthHeader = () => {
  return { headers: { Authorization: `Bearer: ${AUTH_TOKEN}` } }; 
};
*/






// Get token from cookie
// const token = document.cookie
//   .split('; ')
//   .find((row) => row.startsWith('jwttoken'))
//   ?.split('=')[1];

// console.log('token', token);

// Authorization: 'Bearer ' + token,