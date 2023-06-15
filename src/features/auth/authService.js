import axios from "axios";

const API_URL = "http://localhost:8000/api";
const user = localStorage.user ? JSON.parse(localStorage.user) : null;

// Register a new user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    localStorage.setItem("isAuthenticated", true);

    return response.data.data; // Return the response data
  }
};

// log in user
const logIn = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    localStorage.setItem("isAuthenticated", true);

    return response; // Return the response data
  }
};

const UpdateUserData = async (userData) => {
  const userId = user.id;
  const accessToken = user.accessToken;
  const response = await axios.put(`${API_URL}/user/${userId}`, userData, {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  });
  if (response.data.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response; // Return the response data
  }
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("isDarktheme");
};

const authService = {
  register,
  logIn,
  UpdateUserData,
  logout,
};

export default authService;
