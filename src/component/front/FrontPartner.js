import './../../App.css'; // Import your main CSS styles
import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Import OwlCarousel
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import OwlCarousel styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import default theme styles
import Partner_image_1 from './image/uni1.jpg'; // Import partner images
import Partner_image_2 from './image/uni2.jpg';
import Partner_image_3 from './image/uni3.jpg';

function FrontPartner() {

  // Carousel options configuration
  const options = {
    responsive: {
      0: { items: 1 },      // 1 item for small screens
      700: { items: 1 },    // 1 item for medium screens
      800: { items: 2 },    // 2 items for larger screens
      1000: { items: 4 },   // 4 items for extra-large screens
    },
    autoplay: true,          // Enable autoplay
    autoplayTimeout: 1000,  // Autoplay interval
    autoplayHoverPause: true,// Pause on hover
    nav: false,              // Disable navigation buttons
    loop: true,              // Enable looping
    dots: false              // Disable pagination dots
  };

  return (
    <div className="m-0 py-5">
      <p className="text-dark text-center fs-3">Our Partners</p>
      <div className="container">
        <OwlCarousel className='owl-theme' loop margin={10} autoplay {...options}>
          <div className='item'>
            <div className="card img-fluid partner_card p-0 mx-auto">
              <img className="card-img-top" src={Partner_image_1} alt="Partner 1" />
            </div>
          </div>
          <div className='item'>
            <div className="card img-fluid partner_card p-0 mx-auto">
              <img className="card-img-top" src={Partner_image_2} alt="Partner 2" />
            </div>
          </div>
          <div className='item'>
            <div className="card img-fluid partner_card p-0 mx-auto">
              <img className="card-img-top" src={Partner_image_3} alt="Partner 3" />
            </div>
          </div>
        </OwlCarousel>

        <div className="videoLink py-3">
          <a href="#" className="btn text-primary">View all Partners</a>
        </div>
      </div>
    </div>
  );
}

export default FrontPartner;
