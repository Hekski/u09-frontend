import axios from 'axios';

// const API_ADMIN_URL = 'http://localhost:6000/api/admin';
const API_URL = process.env.REACT_APP_API_URL;

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

const getAllUsers = async () => {
  try {
    const res = await axios.get(API_URL + '/admin/', config);
    return res;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/admin/${id}`, config);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data.message;
    }
  }
};

const adminUpdateUser = async (id, updatedUserInfo) => {
  try {
    const res = await axios.put(
      `${API_URL}/admin/${id}`,
      updatedUserInfo,
      config
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

const adminService = { getAllUsers, deleteUser, adminUpdateUser };

export default adminService;
