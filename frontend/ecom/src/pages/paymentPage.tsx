import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm'; // Ensure correct import path
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PC7RWSJe7SWbLAsAb6azsFhHQEyy01JlTlzW4bv0Ya9ziU3Ur1GJzt21YvV1aBMigwf9bzMylZYdExYcdvP7pVM00Lw11cVHe');

const PaymentPage = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const amount = localStorage.getItem("total");
        const response = await axios.post('http://localhost:8000/api/v1/stripe/create', { amount });

        if (response.data.clientSecret) {
          setClientSecret(response.data.clientSecret);
        } else {
          console.error('Invalid client secret received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };

    fetchClientSecret();
  }, []);

  return (
    <div>
      <h2>Payment Page</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
