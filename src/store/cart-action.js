import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch('https://redux-freecodecamp-a8c58-default-rtdb.firebaseio.com/cartItems.json');
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      if (!cartData.itemsList) {
        cartData.itemsList = [];
      }
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sending Request fail',
        type: 'error',
      }));
    }
  };
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      open: true,
      message: 'Sending Request',
      type: 'warning',
    }));
    const sendRequest = async () => {
      await fetch('https://redux-freecodecamp-a8c58-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      // send state as request is succesfull
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sending Request to database successfully',
        type: 'success',
      }));
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sending Request fail',
        type: 'error',
      }));
    }
  };
};