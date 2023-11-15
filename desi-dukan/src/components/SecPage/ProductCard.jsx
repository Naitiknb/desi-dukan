import React from 'react'
import veg from '../Assests/vegtables.png'
import b1 from '../Assests/b1.png'
import b2 from '../Assests/b2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

 


const ProductCard = () => {
  return (
    <div>
<h2 style={{color:'#34AD54'}}>PRODUCTS</h2>
<h2 style={{fontSize:'40px',}}>Our Fresh & Organic Products</h2>
<div className='product-card1'>
<div className='images'>
  <img  src={veg} alt='vege'>
  </img>
  <h4>Organic vegtables</h4>
  <p>$1</p>
  <button  style={{textAlign:'center'}} className=' flex  m-auto '>  <FontAwesomeIcon  icon={faCartShopping}/></button>
</div>
</div>


<div className='product-box' style={{ display:'flex', justifyContent:'space-between'}}>
<img src={b2} alt='b' style={{height:'150px', marginLeft:'-30px'}} ></img>
  <img src={b1} alt='a'style={{height:'150px',marginRight:'-30px'}}></img>

</div>


    </div>
  )
}

export default ProductCard
