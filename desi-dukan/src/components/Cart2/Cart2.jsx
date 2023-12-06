import React from 'react';
import CartPage from '../cart/CartPage'



const Cart2 = ({ cart, removeFromCart }) => {
  return (
    <div>
    
    <CartPage cart={cart} removeFromCart={removeFromCart} />
      
    </div>
  );
};

export default Cart2;
