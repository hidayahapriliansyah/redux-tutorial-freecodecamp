import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch('https://redux-freecodecamp-a8c58-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      const data = res.json();
    };
    sendRequest();
  }, [cart]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn ? <Layout /> : <Auth /> }
    </div>
  );
}

export default App;
