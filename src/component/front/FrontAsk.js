import './../../App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ask_image_1 from './image/ask_image_1.jpg';

const questions = [
  {
    title: 'Gia - Studying in Australia',
    subtitle: 'Studying in Australia',
    image: ask_image_1,
  },
  {
    title: 'Gia - Studying in Australia',
    subtitle: 'Studying in Australia',
    image: ask_image_1,
  },
  {
    title: 'Gia - Studying in Australia',
    subtitle: 'Studying in Australia',
    image: ask_image_1,
  },
  {
    title: 'Gia - Studying in Australia',
    subtitle: 'Studying in Australia',
    image: ask_image_1,
  },
];

const AskCard = ({ title, subtitle, image }) => (
  <div className="item">
    <div className="card img-fluid ask_card p-0 mx-auto">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-img-overlay ask_card_overlay px-2 py-4">
        <div className="ask_iner text-white">
          <p className="card-title fw-bold">{title}</p>
          <p className="card-title">{subtitle}</p>
        </div>
      </div>
    </div>
  </div>
);

function FrontAsk() {
  const options = {
    responsive: {
      0: { items: 1 },
      700: { items: 1 },
      800: { items: 2 },
      1000: { items: 4 },
    },
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    loop: true,
    dots: false,
  };

  return (
    <div className="m-0 py-5">
      <p className="text-dark text-center pt-5 fs-3">ASK DUMATA</p>
      <div className="container">
        <p className="text-dark text-left fs-5 fw-light">
          Our counsellors and institutions answer your burning questions in less than 30 seconds
        </p>

        <OwlCarousel className='owl-theme' loop margin={10} autoplay {...options}>
          {questions.map((question, index) => (
            <AskCard key={index} {...question} />
          ))}
        </OwlCarousel>

        <div className="videoLink py-3">
          <a href="#" className="btn text-primary">View all answers from institutions</a>
        </div>
      </div>
    </div>
  );
}

export default FrontAsk;
