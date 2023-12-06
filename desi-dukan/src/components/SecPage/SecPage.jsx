import React, { useState } from 'react';
import NavBar from '../MainPage/NavBar';
import ProductCard from './ProductCard';
import AboutUs from '../MainPage/AboutUs';
import '../SecPage/SecPage.css';

const SecPage = ({ addToCart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm] =useState(0)

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <div className='body'>
      <NavBar cartCount={cartCount} />
      
<ProductCard addToCart={addToCart} cartCount={cartCount} updateCartCount={updateCartCount} searchTerm={searchTerm} />

      <AboutUs />
    </div>
  );
};

export default SecPage;
