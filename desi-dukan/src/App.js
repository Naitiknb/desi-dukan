import React, { useState } from 'react';
import MainPage from './components/MainPage/MainPage';
import SecPage from './components/SecPage/SecPage';
import Cart2 from './components/Cart2/Cart2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Login from './components/Login/Signup/Login.jsx'
import Signup from './components/Login/Signup/Signup.jsx';
  
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/SecPage" element={<SecPage addToCart={addToCart} />} />
        <Route path="/cart2" element={<Cart2 cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
