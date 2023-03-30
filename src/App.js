import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from './components/Notification';
import { sendCartData } from './store/cart-slice';

let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (isFirstRender){
      isFirstRender = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}></Notification>}
      {isLoggedIn ? <Layout /> : <Auth /> }
    </div>
  );
}

export default App;
