import React, { useState } from 'react';
import './mainpage.css';
import Logo from '../Assests/Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressCard, faPhone, faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {faUser} from '@fortawesome/free-solid-svg-icons';




const NavBar = ({ cartCount} ) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  
  };


  const setOpen =()=>{
    setDropdownOpen(true);
    
  }

  const closeDropdown = () => {
    setDropdownOpen(false);

  };

  return (
    <div className='box'>
      <div className='logo'>
        <img src={Logo} className='h-[60px] w-[150px] mt-[8px] mb-[8px]'   alt="Website Logo" />
      </div>

      <div className='items'>
        <Link to='/MainPage'>
        <b>
          <a href="#home" style={{ color: 'black', textDecoration: "none" }}>
            <label>Home <FontAwesomeIcon icon={faHome} className="ml-2 mt-1" /> </label>
          </a>
        </b></Link>
        <b>
          <a href="#aboutus" style={{ color: 'black', textDecoration: "none" }}>
            <label>About us <FontAwesomeIcon icon={faAddressCard} className="ml-2 mt-1.5" /> </label>
          </a>
        </b>
        <b>
          <a href="#support" style={{ color: 'black', textDecoration: "none" }}>
            <label>Contact <FontAwesomeIcon icon={faPhone} className="ml-2 mt-1.5" /></label>
          </a>
        </b>
        <b>
          <div
            onClick={toggleDropdown}
            style={{ color: 'black', textDecoration: "none", cursor: 'pointer' }}
          >
            <label>Categories <FontAwesomeIcon icon={faBars} className="ml-2 mt-1.5" /></label>
            
            {isDropdownOpen && (
              <div className="dropdown" onMouseEnter={setDropdownOpen} onMouseLeave={closeDropdown}>
                <ul id="dropdown" >
                  <li style={{ color:'black'}} onClick={setOpen}><Link to="/MainPage">Wheat</Link></li>
                  <li  style={{ color:'black'}} onClick={closeDropdown}><Link to="/Rice">Rice</Link></li>
                  <li style={{ color:'black'}} onClick={closeDropdown}><Link to="/Dal">Dal</Link></li>
                  <li  style={{ color:'black'}} onClick={closeDropdown}><Link to="/DairyItems">Dairy items</Link></li>
                  <li style={{ color:'black'}} onClick={closeDropdown}><Link to="/Vegetables">Vegetables</Link></li>
                  <li style={{ color:'black'}} onClick={closeDropdown}><Link to="/Oil">Oil</Link></li>
                  <li style={{ color:'black'}} onClick={closeDropdown}><Link to="/Honey">Honey</Link></li>
                </ul>
              </div>
            )}
          </div>
        </b>
        <Link to="/cart2">
        <b>
          <label style={{ color: 'black' }}>
            Cart <FontAwesomeIcon icon={faCartShopping} className="ml-2 mt-1.5" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </label>
        </b>
      </Link>

        
        <div className='search'>
          <b>
            <div className='search-input-container'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
              <input type='search' id='search' placeholder='Search' />
              <Link to='/Login'>
              <FontAwesomeIcon icon={faUser} className='relative left-[-30px] top-[-3px]' style={{color:'black'}}/></Link>
            </div>
          </b>
        </div>
      
      </div>
    </div>
  );
};

export default NavBar;
