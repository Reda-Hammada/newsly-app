import React from "react";
import { useState } from "react";
import Login from "./form/Login";
import Signup from "./form/Signup";

const Auth = () => {
  const [isLogin, setAuth] = useState(false);
  return (
    <section>
      <div>
        <Login />
        <Signup />
      </div>
    </section>
  );
};

export default Auth;
