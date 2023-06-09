import { useState, useEffect } from "react";
import Article from "./Article";
const Feed = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.stringify(localStorage.user));
  }, []);

  return (
    <div>
      <Article />
    </div>
  );
};

export default Feed;
