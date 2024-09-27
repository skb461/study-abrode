import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Owl() {

    const options = {
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 1,
        },
        700: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      },
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      nav: false,
      loop:true,
      dots: false
    }

    return (
        <OwlCarousel className='owl-theme' loop margin={10} autoplay {...options}>
            <div class='item'>
                <h4>1</h4>
            </div>
            <div class='item'>
                <h4>2</h4>
            </div>
            <div class='item'>
                <h4>3</h4>
            </div>
            <div class='item'>
                <h4>4</h4>
            </div>
            <div class='item'>
                <h4>5</h4>
            </div>
            <div class='item'>
                <h4>6</h4>
            </div>
            <div class='item'>
                <h4>7</h4>
            </div>
            <div class='item'>
                <h4>8</h4>
            </div>
            <div class='item'>
                <h4>9</h4>
            </div>
            <div class='item'>
                <h4>10</h4>
            </div>
            <div class='item'>
                <h4>11</h4>
            </div>
            <div class='item'>
                <h4>12</h4>
            </div>
        </OwlCarousel>
    );
  }
  
  export default Owl;

