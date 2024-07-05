import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [email, setEmail] = useState('');
  
  const history = useNavigate();

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
     localStorage.setItem("email",email)
    history('/payment');
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
      <button onClick={handleContinue}>Continue</button>
      
    </div>
  );
};

export default CheckoutPage;
