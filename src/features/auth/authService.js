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

const UpdateUserData = async (userData) => {
  const user = localStorage.getItem("user");
  const response = await axios.post(`${API_URL}/user/${user.id}`, userData, {
    headers: {
      Authorization: "Bearer " + localStorage.user.accessToken,
      "Content-Type": "application/json",
    },
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response.data.data; // Return the response data
  }
};

const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logIn,
  UpdateUserData,
  logout,
};

export default authService;
