import React from "react";
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/slices/cartSlice';

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  // ingat! nama state.cart diambil dari configureStore reducer
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
