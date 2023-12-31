import React from 'react';
import './mainpage.css'; // Update the import path to match the case
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


export const AboutUs = () => {
  return (
    <div  id="aboutus" className="box4">
    <div className="flex">
      <div className="about flex-1">
        <b><p className="p text-2xl font-semibold">About us</p></b>
  
        <p>
      At "The Organic Store", we are passionate about providing the finest organic products to our customers while making a positive impact on the lives of our dedicated farmers. Our commitment to quality, sustainability, and fair practices sets us apart in the industry.
    </p>
  
    <p>
      We take pride in sourcing our organic materials directly from local farmers. By offering fair and competitive prices, we empower farmers and strengthen local communities. Your support allows us to continue this mission and contribute to a healthier, more sustainable world.
    </p>
  
    <p>
      From farm to table, we ensure that every product you purchase from us is of the highest quality and produced with the utmost care. Join us in our journey to promote organic agriculture, support local farmers, and enjoy the natural goodness of our products.
    </p>
      </div>
  
      <div id="support" className="s flex-1">
        <b><p className="text-2xl font-semibold">Support</p></b>
        <b><p>Contact us <FontAwesomeIcon icon={faPhone} /></p></b>
    <b><p>Shipping and returns</p></b>
    <b><p>Terms & conditions</p></b>
   <b><p>Instagram <FontAwesomeIcon icon={faInstagram}/>  </p> </b>
    <b><p>Facebook <FontAwesomeIcon icon={faFacebook} /> </p></b>
    <b><p>Whatsapp <FontAwesomeIcon icon={faWhatsapp} /></p></b>
    <b><p>Customer Support <FontAwesomeIcon icon={faPhone} /></p></b>
      </div>
  
  
      <div className="feedback flex-1">
        <b><p className="text-2xl font-semibold">Feedback</p></b>
  
        <b><p className="text-2xl font-semibold">User Feedback</p></b>
    <form>
      <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700" htmlFor="name">
  Your Name
</label>
        <input
          className="px-4 py-2 mt-1 w-full border rounded-lg focus:ring focus:ring-opacity-50"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
  
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="rating">
          Rating
        </label>
        <select
          className="px-4 py-2 mt-1 w-full border rounded-lg focus:ring focus:ring-opacity-50"
          id="rating"
          name="rating"
          required
        >
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>
  
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="review">
          Review
        </label>
        <textarea
          className="px-4 py-2 mt-1 w-full border rounded-lg focus:ring focus:ring-opacity-50"
          id="review"
          name="review"
          required
        ></textarea>
      </div>
  
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        type="submit"
      >
        Submit Review
      </button>
    </form>
      </div>
      
    </div>
  
  </div>
  
  
  );
};

export default AboutUs