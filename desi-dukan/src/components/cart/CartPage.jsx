import React, { useState } from 'react';
import  { useEffect} from 'react';
import AboutUs from '../MainPage/AboutUs';
import NavBar from '../MainPage/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './cart.css';

const CartPage = ({ cart, removeFromCart }) => {
  const [expanded, setExpanded] = useState(false);
  const [quantities, setQuantities] = useState(Array(cart.length).fill(1));

  const calculateSubtotal = (item, quantity) => {
    return quantity * item.price;
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item, index) => acc + calculateSubtotal(item, quantities[index]), 0);
  };

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities.splice(index, 1); // Remove quantity entry for the removed item
      return newQuantities;
    });
  };

  const updateQuantity = (index, newQuantity) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantity);
      return newQuantities;
    });
  };

  useEffect(() => {
   
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      while (newQuantities.length < cart.length) {
        newQuantities.push(1);
      }
      return newQuantities;
    });
  }, [cart]);

  return (
    <div>
      <NavBar />

      <div className={`cart-container ${expanded ? 'expanded' : ''}`}>
        <h3 className='cart-title'>Shopping Cart</h3>
        <div className='cart-main'>
          <div className='label-items bg-[white]'>
            <span className='label'>Product</span>
            <span className='label'>Price</span>
            <span className='label'>Quantity</span>
            <span className='label'>Sub-Total</span>
            <span className='label'>Cancel-Item</span>
          </div>

          <div className='cart-Items'>
        {cart.map((item, index) => (
          <div className='product-details' key={index}>
            <div className='product-item'>
              <label htmlFor={`productName-${index}`} className='product-name'>
                {item.name}
              </label>
              <label className='product-price mr-[100px]'>${item.price}</label>
              <div className='quantity-buttons mr-[100px]'>
                <button className='quantity-btn mr-[5px]' onClick={() => updateQuantity(index, quantities[index] - 1)}>
                  -
                </button>
                <span className='quantity '>{quantities[index]}</span>
                <button className='quantity-btn  ml-[5px]' onClick={() => updateQuantity(index, quantities[index] + 1)}>
                  +
                </button>
              </div>
              <label className='product-total mr-[100px] '>${calculateSubtotal(item, quantities[index])}</label>
              <FontAwesomeIcon className='cancel-icon' icon={faTimesCircle} onClick={() => handleRemoveItem(index)} />
            </div>
          </div>
        ))}
      </div>

      <div className='cart-summary'>
        <p>Total: ${calculateTotal()}</p>
        <button type='button' className='btn-cart' onClick={handleExpand}>
          Proceed to Checkout
        </button>
      </div>
        </div>
      </div>

      <AboutUs />
    </div>
  );
};

export default CartPage;
