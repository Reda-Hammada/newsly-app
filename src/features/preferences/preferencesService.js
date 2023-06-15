import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

const storePreferences = async (preferences) => {
  const user = localStorage.user ? JSON.parse(localStorage.user) : null;

  const userId = user.id;
  const accessToken = user.accessToken;

  await axios.post(`${API_URL}/preferences/${userId}`, preferences, {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  });
};

const fetchPreferences = async () => {
  const user = localStorage.user ? JSON.parse(localStorage.user) : null;

  const userId = user.id;
  const accessToken = user.accessToken;

  const response = await axios.get(`${API_URL}/preferences/${userId}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
const preferencesService = {
  storePreferences,
  fetchPreferences,
};

export default preferencesService;
