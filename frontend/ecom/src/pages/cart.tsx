import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart';
import { useNavigate } from "react-router-dom";
 // Adjust this based on your Redux setup

const CartPage = () => {
  const cartstate = useSelector((state: any) => state.cart); 

     
  const navgate = useNavigate()

    const proceedToCheckout = () => {
        navgate('/checkout');
      };

      const [total , settotal] = useState("")
    
      const calculateTotalAmount = () => {
        let total = 0;
        cartstate?.cartItems.forEach(item => {
          total += item.amount / 1; 
        });
        let ss = String(total)
        
        settotal(ss) 
        
        
      };
     


      useEffect(()=>{
        calculateTotalAmount();
        
      },[])

      localStorage.setItem("total",total)
 
      
      
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartstate.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
           
            cartstate?.
             //@ts-ignore
            cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <p className="text-xl font-semibold">Total: ${total}</p>
          <div className="mt-4">
            <Link to="/checkout">
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={proceedToCheckout}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
