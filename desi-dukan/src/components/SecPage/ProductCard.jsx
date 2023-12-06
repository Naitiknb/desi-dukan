import React from 'react';
import tomato from '../Assests/tomato.png'
import orange from '../Assests/orange.png'
import olive from '../Assests/olive.png'
import honey from '../Assests/honey.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBagShopping } from '@fortawesome/free-solid-svg-icons';


const ProductCard = ({ addToCart, cartCount, updateCartCount }) => {





  return (
    <div>
      <h2 style={{ color: '#34AD54', textAlign: 'center' }}>PRODUCTS</h2>
      <h2 style={{ fontSize: '40px', textAlign: 'center' }}>Our Fresh & Organic Products</h2>
      (
      <div   className='product-cards mb-[20px] '>
        <div className='product-1 bg-white h-[350px] mt-[20px]' style={{ borderColor: 'gray border', border: '2px solid green' }}>
          <img className='w-[253px] h-[230px]  bg-[#e0d8d8]' src={tomato} alt='tomato'></img>
          <p  style={{ textAlign: 'center', fontSize: '23px', fontFamily: 'Trebuchet MS ,sans-serif' }}>Fresh tomato</p>
          <p style={{ textAlign: 'center', color: 'green', borderBottom: '1px solid gray' }}>$1</p>
          <div className="product-actions">
            <p className='button'>
              <FontAwesomeIcon icon={faEye} style={{ color: 'green' }} /> View Detail
            </p>
            <p className='button-2 ml-[40px]' onClick={() => {
              addToCart({ name: 'Fresh Tomato', price: 1 });
              updateCartCount(cartCount + 1); // Update the cart count
            }}>
              <FontAwesomeIcon icon={faBagShopping} style={{ color: 'green' }} /> Add To Cart
            </p>
          </div>
        </div>


        <div className='product-2  bg-white h-[350px] mt-[20px]' style={{border: '2px solid green'}}  >
          <img className='w-[250px] h-[230px] bg-[#dedbce]' src={orange} alt='orange'></img>
          <p style={{ textAlign: 'center',fontSize:'23px',fontFamily:'Trebuchet MS ,sans-serif' }}>Fresh orange</p>
          <p   style={{  textAlign: 'center',color:'green',borderBottom: '1px solid gray'  }}>$2</p>
          <div className="product-actions">
            <p className='button'> <FontAwesomeIcon icon={faEye} style={{color:'green'}} /> View detail</p>
            <p className='button-2 ml-[40px]' onClick={() => {
            addToCart({ name: 'Fresh Oranges', price: 2 });
            updateCartCount(cartCount + 1); // Update the cart count
          }}
             > <FontAwesomeIcon icon={faBagShopping} style={{color:'green'}} />Add To Cart</p>
          </div>
        </div>


        <div className='product-3   bg-white h-[350px] mt-[20px]' style={{border: '2px solid green'}}>
          <img className='w-[250px] h-[230px] bg-[#ccd5c2]' src={olive} alt='olive'></img>
          <p style={{ textAlign: 'center',fontSize:'23px',fontFamily:'Trebuchet MS ,sans-serif' }}>Fresh olive oil</p>
          <p  style={{ textAlign: 'center',color:'green',borderBottom: '1px solid gray'  }}>$4</p>
          <div className="product-actions">
            <p className='button'><FontAwesomeIcon icon={faEye} style={{color:'green'}} /> View detail</p>
            <p className='button-2 ml-[40px]' onClick={() =>{ 
              addToCart({ name: 'Fresh Olive Oil', price: 4 })
              updateCartCount(cartCount + 1); // Update the cart count
            }
              }> <FontAwesomeIcon icon={faBagShopping} style={{color:'green'}} />Add To Cart</p>
          </div>
        </div>

        <div className='product-4     bg-white h-[350px] mt-[20px]' style={{border: '2px solid green'}}>
          <img className='w-[250px] h-[230px] bg-[#c4bcb7]' src={honey} alt='honey'></img>
          <p style={{ textAlign: 'center',fontSize:'23px',fontFamily:'Trebuchet MS ,sans-serif' }}>Fresh honey</p>
          <p  style={{ textAlign: 'center',color:'green', borderBottom: '1px solid gray'    }}>$2</p>
          <div className="product-actions">
            <p className='button'><FontAwesomeIcon icon={faEye} style={{color:'green'}} /> View detail</p>
            <p className='button-2 ml-[40px]' onClick={() =>{
               addToCart({ name: 'Fresh Honey', price: 2 })
               updateCartCount(cartCount + 1); // Update the cart count
              }}
               
               ><FontAwesomeIcon icon={faBagShopping} style={{color:'green'}} />Add To Cart</p>
          </div>
        </div>
      </div>
       )
    </div>

       
  );
};


export default ProductCard;