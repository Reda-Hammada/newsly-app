import { useState, useEffect } from "react";

const useUserFromLocalStorage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
  }, []);

  return user;
};

export default useUserFromLocalStorage;
