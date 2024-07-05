

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CartPage from './pages/cart';
import Navbar from './components/navbar';
import CheckoutPage from './pages/checkoutPage';
import PaymentPage from './pages/paymentPage';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      
        <Route  path="/" element={<Home/>} />
        <Route  path="/cart" element={<CartPage/>} />
        <Route  path="/checkout" element={<CheckoutPage/>} />
        <Route  path="/Payment" element={<PaymentPage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
