import React from "react";
import { useSelector } from 'react-redux';
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      { isAuth ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
