import React from "react";
import { Redirect,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { FormLogin } from "../components";
import "./index.css";
const Loginpage = () => {
  const { userToken } = useSelector((state) => state.auth);

  if(userToken) return <Redirect to='/'/>
  
  return (
    <div style={{ background: "#f2f2f2" }}>
      <div className="login__container">
        <div className="login__desc">
          <h1>MINDBOOK</h1>
          <p>
            MINDBOOK giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </p>
        </div>
        <FormLogin />
      </div>
    </div>
  );
};

export default Loginpage;
