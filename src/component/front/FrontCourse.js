import './../../App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import course_image_1 from './image/medicine.png';
import course_image_2 from './image/network.png';
import course_image_3 from './image/desktop.png';
import course_image_4 from './image/people.png';
import course_image_5 from './image/law.png';
import course_image_6 from './image/dna.png';
import course_image_7 from './image/course_image_7.png';

const courses = [
  {
    title: 'Health and Medicine',
    image: course_image_1,
    subjects: ['Medicine', 'Dental Studies', 'Veterinary Studies'],
  },
  {
    title: 'Business',
    image: course_image_2,
    subjects: ['Banking and Finance', 'Accounting', 'Sales And Marketing'],
  },
  {
    title: 'Computing and IT',
    image: course_image_3,
    subjects: ['Computer Science', 'Information Systems', 'Software Engineering'],
  },
  {
    title: 'Allied Health',
    image: course_image_4,
    subjects: ['Speech Pathology', 'Pharmacy', 'Occupational Therapy'],
  },
  {
    title: 'Law and Legal Studies',
    image: course_image_5,
    subjects: ['Law', 'Justice Studies', 'Criminal Law'],
  },
  {
    title: 'Biological and Life Sciences',
    image: course_image_6,
    subjects: ['Biomedical Engineering', 'Biological Sciences', 'Psychology'],
  },
];

const CourseCard = ({ title, image, subjects }) => (
  <div className="col-4 mx-auto p-3 mx-2 card border-0 bg-transparent course_card">
    <img src={image} className="d-block mx-auto bg-transparent pb-4" alt={title} />
    <p className="fw-light text-center px-5 fs-5">{title}</p>
    <ul className="list-group list-group-flush bg-transparent text-center fw-light">
      {subjects.map((subject, index) => (
        <li key={index} className="list-group-item bg-transparent text-center fw-light">{subject}</li>
      ))}
    </ul>
  </div>
);

function FrontCourse() {
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
      <p className="text-dark text-center pt-5 fs-3">Popular Courses among International Students</p>
      <div className="container pt-5">
        <div className="row">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="videoLink py-3">
          <a href="#" className="btn text-primary">Browse more subjects</a>
        </div>

        <p className="text-dark text-left pt-5 fs-3">Could your next home be?</p>
        
        <OwlCarousel className='owl-theme' loop margin={10} autoplay {...options}>
          {['Australia', 'USA', 'UK', 'Canada'].map((country, index) => (
            <div className='item' key={index}>
              <div className="card img-fluid course_second_card p-0 mx-auto">
                <img className="card-img-top" src={course_image_7} alt={country} />
                <div className="card-img-overlay course_second_card_overlay px-5 py-4">
                  <div className="course_second_iner text-white">
                    <p className="card-title fw-bold">{country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        
      </div>
    </div>
  );
}

export default FrontCourse;
