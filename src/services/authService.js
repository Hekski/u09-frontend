import axios from 'axios';

// const API_AUTH_URL = 'http://localhost:8000/api/auth';
// const API_AUTH_URL = process.env.REACT_APP_API_AUTH_URL;
const API_URL = process.env.REACT_APP_API_URL;

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

const loginFunction = async (loginData) => {
  try {
    const res = await axios.post(API_URL + '/auth/login', loginData, config);
    console.log(res);
    if (res.data.success === true) {
      return { data: res.data.user, message: res.data.message, auth: true };
    }
  } catch (error) {
    return error.response.data.message;
  }
};

const registerFunction = async (registerData) => {
  try {
    const res = await axios.post(
      API_URL + '/auth/register',
      registerData,
      config
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const isauth = async () => {
  try {
    const user = await axios.get(API_URL + '/auth/isauth', config);
    return (user.data, { auth: true });
  } catch (error) {
    return { data: {}, auth: false };
    // return error.response.data;
  }
};

const authService = { loginFunction, registerFunction, isauth };

export default authService;
