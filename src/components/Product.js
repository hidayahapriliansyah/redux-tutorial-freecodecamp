import React from "react";
import { useDispatch } from 'react-redux';


import "./Product.css";
import { cartAction } from '../store/cartSlice';
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(cartAction.addToCart({
      id,
      price,
      totalPrice: price,
      name,
    }));
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Product;
