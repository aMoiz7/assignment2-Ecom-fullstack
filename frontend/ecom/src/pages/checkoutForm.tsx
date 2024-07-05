import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CheckoutForm = ({ clientSecret }:any) => {
  const stripe = useStripe();
  const elements = useElements();
  //@ts-ignore
  const cartstate = useSelector((state) => state.cart);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: localStorage.getItem("email"), // Replace with actual email input
          },
        },
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        const res = await axios.post('http://localhost:8000/api/v1/transaction/user', {
            email: localStorage.getItem("email"),
            paymentStatus: 'paid',
            purchaseItems: cartstate.cartItems,
            transactionId: result.paymentIntent.id,
          });
      
          console.log(res.data); // Log the response from your backend
          // Example: Show success message to user
         if(res.data) alert('Order placed successfully!');
         
         
       
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };

  return (
    <div className="w-6/12 mt-20 flex flex-col justify-center align-start text-xl">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" className="mt-6 ml-10 bg-black text-white w-16" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
