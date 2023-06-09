import { useState, useEffect } from "react";

const useUserFromLocalStorage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.user);
  }, []);

  return user;
};

export default useUserFromLocalStorage;
