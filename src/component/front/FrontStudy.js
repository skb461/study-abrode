import { Link } from 'react-router-dom';
import './../../App.css'; // Import your main CSS styles
import studyImage from './image/study.gif'; // Import the study image

function FrontStudy() {
  return (
    <div className="m-0 py-5">
      <div className="container mx-auto">
        <div className="row pb-5">
          <div className="col-6">
            <h1 className="display-1 fw-bold study_heading">
              Online<br /><span>Admission</span> Is Now Super Easier
            </h1>
            <div className="row study_btn">
              {/* Using Link instead of a href */}
              <Link to="/IELTS" className="btn btn_blue px-5 py-3 my-4 fw-bold col mx-4">Get Admission</Link>
              <a href="#" className="btn px-5 py-3 my-4 fw-bold col mx-4">Watch Video</a>
            </div>
          </div>
          <div className="col-6">
            <img src={studyImage} className="studyImage d-block ms-auto" alt="Student studying" />
          </div>
        </div>
        
        <div className="studyForm p-5 border_blue mt-5">
          <div className="row">
            <div className="col-8">
              <h1 className="fw-light">
                Free online IELTS Real Mock Tests with <br />
                <span className="display-3 fw-bold">Explanation</span>
              </h1>
            </div>
            <div className="col-4 studyTextCenter">
              <Link to="/Study" className="btn btn_blue px-5 py-3 my-4 fw-bold col">Take A Test</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontStudy;
