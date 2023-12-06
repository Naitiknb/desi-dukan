import React from 'react';
import './mainpage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../Assests/img1.png';
import img2 from '../Assests/img2.png';
import img3 from '../Assests/img3.png';
import wheat from '../Assests/wheat.jpg';
import rice from '../Assests/rice.jpg';
import dal from '../Assests/dal.jpg';
import vegetables from '../Assests/veg.jpg'; // Add correct path
import dairy from '../Assests/dairy.jpg'; // Add correct path
import oil from '../Assests/oil.jpg'; // Add correct path
import honey from '../Assests/honey.jpg'; // Add correct path
import work from '../Assests/work.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { AboutUs } from './AboutUs';


export const MainPage = () => {
  return (
    <div className='body'>
      {/* navigation bar */}
      <NavBar />
      {/* navigation bar */}

      {/* Slideshow */}
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} style={{ maxHeight: '500px' }} alt='img1' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} style={{ maxHeight: '500px' }} alt='img2' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} style={{ maxHeight: '500px' }} alt='img3' />
        </Carousel.Item>
      </Carousel>
      {/* Slideshow */}

      {/* Cards */}
      <div id='product' className='products'>
        {/* Wheat Card */}
        <Card style={{ width: '280px', height: '400px' }}>
          <Card.Img variant='top' src={wheat} />
          <Card.Body>
            <Card.Title>Wheat</Card.Title>
            <Card.Text>Wholesome and chemical-free, perfect for all your day-to-day needs.</Card.Text>
            <Link to='/SecPage'>
              <Button variant='primary'>Buy</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* Rice Card */}
        <Card style={{ width: '280px', height: '400px' }}>
          <Card.Img variant='top' src={rice} />
          <Card.Body>
            <Card.Title>Rice</Card.Title>
            <Card.Text>Premium organic rice for your favorite dishes. Chemical-free and delicious.</Card.Text>
            <Link to='/SecPage'>
              <Button variant='primary'>Buy</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* Dal Card */}
        <Card style={{ width: '280px', height: '400px' }}>
          <Card.Img variant='top' src={dal} />
          <Card.Body>
            <Card.Title>Dal</Card.Title>
            <Card.Text>Wholesome organic dal, perfect for nutritious meals. Chemical-free and delicious.</Card.Text>
            <Link to='/SecPage'>
              <Button variant='primary'>Buy</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className='box1'>
        {/* Vegetables Card */}
        <Card style={{ width: '280px', height: '400px' }}>
          <Card.Img variant='top' src={vegetables} />
          <Card.Body>
            <Card.Title>Vegetables</Card.Title>
            <Card.Text>Fresh and organic vegetables for your healthy meals. Grown with care.</Card.Text>
            <Link to='/SecPage'>
              <Button variant='primary'>Buy</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* Dairy Card */}
        <Card style={{ width: '280px', height: '400px' }}>
          <Card.Img variant='top' src={dairy} />
          <Card.Body>
            <Card.Title>Dairy</Card.Title>
            <Card.Text>Dairy products from happy, healthy cows. Pure and organic for your family.</Card.Text>
            <Link to='/SecPage'>
              <Button variant='primary'>Buy</Button>
            </Link>
          </Card.Body>
        </Card>

        {/* Oil Card */}
        <Card style={{ width: '280px', height: '400px' }}>
          <Card.Img variant='top' src={oil} />
          <Card.Body>
            <Card.Title>Oil</Card.Title>
            <Card.Text>Our organic vegetable oil is perfect for cooking and frying. It's pure, natural and chemical-free.</Card.Text>
            <Link to='/SecPage'>
              <Button variant='primary'>Buy</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className='box2'>
        {/* Honey Card */}
        <Card style={{ width: '280px', height: '400px' }}>
          <Card.Img variant='top' src={honey} />
          <Card.Body>
            <Card.Title>Honey</Card.Title>
            <Card.Text>Natural and pure organic honey, a sweet and healthy addition to your pantry.</Card.Text>
            <Link to='/SecPage'>
              <Button variant='primary'>Buy</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* How We Work Section */}
      <div className='work'>
        <b>
          <h1 className='h1'>How We Work ?</h1>
        </b>
        <img className='decoration-[#50d71e] h-[80%]' src={work} alt='work' />
      </div>

      <AboutUs />
    </div>
  );
};

export default MainPage;
