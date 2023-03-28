import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn ? <Layout /> : <Auth /> }
    </div>
  );
}

export default App;
