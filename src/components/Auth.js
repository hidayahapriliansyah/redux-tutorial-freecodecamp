import React from "react";
import { useDispatch } from 'react-redux';
import { authAction } from '../store/authSlice';

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(authAction.login());
  };

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button onClick={handleClick} className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
