import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Slice/productSlice'; // Import action to remove from cart

const CartItem = ({ item }:any) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.name)); // Dispatch action to remove item from cart
  };


  



  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-600">${item.amount}</p>
      
      <button className="bg-red-500 text-white px-3 py-1 mt-2 rounded" onClick={handleRemove}>
        Remove
      </button>

      
    </div>
  );
};

export default CartItem;
