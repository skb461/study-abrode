import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './../../App.css';
import StudyPageImage1 from './image/StudyPageImage1.jpg';
import StudyPageImage2 from './image/StudyPageImage2.jpg';
import StudyPageImage3 from './image/StudyPageImage3.jpg';

const cardData = [
  {
    title: "Academic",
    completedCourses: 500,
    image: StudyPageImage1,
    link: "academic" // Link corresponds to the page type
  },
  {
    title: "General Training",
    completedCourses: 8700,
    image: StudyPageImage2,
    link: "general-training" // Link corresponds to the page type
  },
  {
    title: "Advanced Practice Test",
    completedCourses: 1960,
    image: StudyPageImage3,
    link: "advanced-practice-test" // Link corresponds to the page type
  }
];

function Study() {
  const navigate = useNavigate(); // useNavigate hook to navigate to a new page

  // Function to navigate to the TestPage with the selected category
  const handleCardClick = (link) => {
    navigate(`/tests/${link}`); // Use navigate instead of history.push
  };

  return (
    <div className="container my-5">
      <div className="row d-flex align-items-stretch">
        {cardData.map((card, index) => (
          <div className="col-md-4 my-3" key={index}>
            <div className="card p-0 mx-auto h-100" onClick={() => handleCardClick(card.link)}>
              <img className="card-img-top" src={card.image} alt={card.title} style={{ width: "100%" }} />
              <div className="card-body d-flex flex-column">
                <h1 className="card-title fw-bolder">{card.title}</h1>
                <p className="card-text">Completed Course: <span className="text-muted fw-bolder">{card.completedCourses}</span></p>
                <hr className="bg-primary mt-auto" style={{ height: "5px" }} />
                <button className="btn btn-primary job_blue_button stretched-link col-12">
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Study;
