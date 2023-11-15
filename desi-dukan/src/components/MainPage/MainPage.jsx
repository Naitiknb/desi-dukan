import React from 'react';
import './mainpage.css'; // Update the import path to match the case
import Logo from '../Assests/Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../Assests/img1.png';
import img2 from '../Assests/img2.png';
import img3 from '../Assests/img3.png';
import wheat from '../Assests/wheat.jpg';
import rice from '../Assests/rice.jpg';
import dal from '../Assests/dal.jpg';
import vegetables from '../Assests/veg.jpg'
import dairy from '../Assests/dairy.jpg';
import  oil from '../Assests/oil.jpg';
import honey from '../Assests/honey.jpg'
import work from '../Assests/work.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';






export const MainPage = () => {
  return (
    <div className='body'>

      {/* navigation bar */}
      <div className='box'>
        <div className='logo'>
          <img src={Logo} alt="Website Logo" />
        </div>
       
        <div className='items'>
          <b>
            <a href="#home" style={{ color: 'black', textDecoration: "none" }}>
              <label>Home <FontAwesomeIcon icon={faHome} className="ml-2 mt-1" /> </label>
            </a>
          </b>
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
            <a href="#product" style={{ color: 'black', textDecoration: "none" }}>
              <label>Categories <FontAwesomeIcon icon={faBars} className="ml-2 mt-1.5" /></label>
            </a>
          </b>
          <b>
            <label>Cart <FontAwesomeIcon icon={faCartShopping} className="ml-2 mt-1.5" /></label>
          </b>
          <div className='search'>
            <b>
              <div className='search-input-container'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                <input type='search' id='search' placeholder='Search' />
              </div>
            </b>
          </div>
          </div>
          </div>




{/* navigation bar */}


{/* slideshow */}    
<Carousel >
      <Carousel.Item >
      <img className='d-block w-100' src={img1}  style={{ maxHeight: '500px' }} alt='img1'></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={img2} style={{ maxHeight: '500px' }} alt='img2'></img>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={img3}style={{ maxHeight: '500px' }} alt='img3'></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
{/* cards */}

<div  id='product' className='products'>
<Card style={{ width: '280px',height:"400px" }} >
      <Card.Img  variant="top" src={wheat} />
      <Card.Body>
        <Card.Title>Wheat</Card.Title>
        <Card.Text>
        Wholesome and chemical-free, perfect for all your culinary needs.
        </Card.Text>
        <Link to="/SecPage">
       <Button variant="primary">Buy</Button></Link>
      </Card.Body>
    </Card>
  


   
     <Card style={{ width: '280px',height:"400px"}} >
      <Card.Img  variant="top" src={rice} />
      <Card.Body>
        <Card.Title>Rice</Card.Title>
        <Card.Text>
        Premium organic rice for your favorite dishes. Chemical-free and delicious.
        </Card.Text>
        <Link to="/SecPage">
       <Button variant="primary">Buy</Button></Link>
      </Card.Body>
    </Card>
 


 
    <Card style={{ width: '280px',height:"400px"}} >
      <Card.Img variant="top" src={dal} />
      <Card.Body>
        <Card.Title>Dal</Card.Title>
        <Card.Text>
        Wholesome organic dal, perfect for nutritious meals. Chemical-free and delicious.
        </Card.Text>
        <Link to="/SecPage">
       <Button variant="primary">Buy</Button></Link>
      </Card.Body>
    </Card>

    </div>


    <div  className='box1'>
    <Card style={{ width: '280px',height:"400px"}} >
      <Card.Img variant="top" src={vegetables} />
      <Card.Body>
        <Card.Title>vegetablest</Card.Title>
        <Card.Text>
        Fresh and organic vegetables for your healthy meals. Grown with care.
        </Card.Text>
        <Link to="/SecPage">
       <Button variant="primary">Buy</Button></Link>
      </Card.Body>
    </Card>
  
    
    
    <Card style={{ width: '280px',height:"400px"}} > 
      <Card.Img  variant="top" src={dairy} />
      <Card.Body>
        <Card.Title>dairy</Card.Title>
        <Card.Text>
        Dairy products from happy, healthy cows. Pure and organic for your family.
        </Card.Text>
        <Link to="/SecPage">
       <Button variant="primary">Buy</Button></Link>
      </Card.Body>
    </Card>
 
    
   
    <Card style={{ width: '280px',height:"400px"}} >
      <Card.Img variant="top" src={oil} />
      <Card.Body>
        <Card.Title>Oil</Card.Title>
        <Card.Text>
        Our organic vegetable oil is perfect for cooking and frying. It's pure, natural, and free from chemicals.
        </Card.Text>
        <Link to="/SecPage">
       <Button variant="primary">Buy</Button></Link>
      </Card.Body>
    </Card>
    </div>

    <div className='box2'>

     <Card style={{ width: '280px',height:"400px"}}  >
      <Card.Img variant="top" src={honey} />
      <Card.Body>
        <Card.Title>honey</Card.Title>
        <Card.Text>
        Natural and pure organic honey, a sweet and healthy addition to your pantry.
        </Card.Text>
        
        <Link to="/SecPage">
       <Button variant="primary">Buy</Button></Link>
      </Card.Body>
    </Card>  
    </div>
     
    <b><h1 className='h1'>How We  Work ?</h1></b>
<div className='work'>
<img src={work} alt='work'></img>
</div>

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
      <label className="block text-sm font-medium text-gray-700" for="name">
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
      <label className="block text-sm font-medium text-gray-700" for="rating">
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
      <label className="block text-sm font-medium text-gray-700" for="review">
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



      
</div>




   
  );
}

export default MainPage;

