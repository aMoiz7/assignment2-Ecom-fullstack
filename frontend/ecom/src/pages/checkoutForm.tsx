import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CheckoutForm = ({ clientSecret }:any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success ,setsuccess] = useState("")
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

      if (result) {
        console.error(result);
      } else {
        const res = await axios.post('http://localhost:8000/api/v1/transaction/user', {
            email: localStorage.getItem("email"),
            paymentStatus: 'paid',
            purchaseItems: cartstate.cartItems,
            transactionId: result.paymentIntent.id,
          });
      
          console.log(res.data); // Log the response from your backend
          // Example: Show success message to user
         if(res.data) {
          alert(' Your Order placed successfully ' );
          setsuccess(' Your Order placed successfully ')
         }


         
         
       
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">Stripe Checkout</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <h1 className='mb-8 text-gray-400 text-l'> Email : {localStorage.getItem("email")}</h1>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!stripe}
      >
        Pay
      </button>
      {/* {paymentError && <p className="text-red-500 mt-2">{paymentError}</p>}
      {paymentSuccess && <p className="text-green-500 mt-2">Payment successful!</p>} */}
      <p className="text-green-500 mt-2">{success}</p>
    </form>
    
  </div>

  );
};

export default CheckoutForm;
