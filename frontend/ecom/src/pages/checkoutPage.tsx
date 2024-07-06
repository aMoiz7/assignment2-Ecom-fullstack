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
    <div className='flex flex-col mt-20 justify-center align-middle items-center'>
      <h2 className='font-semibold '>Enter your email to proceed</h2>
      <input type="email" value={email} className='mt-4 border-2 rounded-sm w-64' onChange={handleEmailChange} placeholder="Enter your email" />
      <button className='text-white mt-6 bg-black rounded-md w-44' onClick={handleContinue}>proceed to checkout</button>
      
    </div>
  );
};

export default CheckoutPage;
