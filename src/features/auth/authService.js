import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

// Register a new user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data; // Return the response data
  }
};

// log in user
const logIn = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data; // Return the response data
  }
};

// // log out
// const logOut = async () => {
//   const response = await axios.post(`${API_URL}/logout`, {
//     headers: {},
//   });
// };

const authService = {
  register,
  logIn,
};

export default authService;
