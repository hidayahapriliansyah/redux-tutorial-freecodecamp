import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from './components/Notification';
import { uiActions } from './store/ui-slice';

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

    const sendRequest = async () => {
      // send state as sendin request
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sending Request',
        type: 'warning',
      }));
      const res = await fetch('https://redux-freecodecamp-a8c58-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      const data = res.json();
      // send state as request is succesfull
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sending Request to database successfully',
        type: 'success',
      }));
    };
    // send state if request error
    sendRequest().catch((err) => {
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sending Request to database successfully',
        type: 'success',
      }));
    });
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
