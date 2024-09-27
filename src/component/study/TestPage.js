import React, { useState } from 'react';
import './../../App.css';
import StudyPageIcon5 from './image/solutions.png';
import StudyPageIcon6 from './image/loop.png';
import StudyPageIcon7 from './image/results.png';

function TestPage({ testData, pageTitle }) {
  const [selectedTest, setSelectedTest] = useState(1);

  return (
    <div className="container mb-5">
      <div className="row">
        {/* Left Side - Test Selection */}
        <div className="col-md-4 m-0 p-0">
          <h4 className="bg-white py-4 px-3 m-0 border-bottom border-top border-4 border-primary">Course Content</h4>
          <ul className="list-group list-group-flush bg-light">
            {Object.keys(testData).map((test) => (
              <li key={test} className="list-group-item bg-transparent">
                <button className="btn text-start" style={{ width: "100%" }} onClick={() => setSelectedTest(test)}>
                  Cambridge <span>11</span> Test <span>{test}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Cards */}
        <div className="col-md-8 m-0 p-0">
          <div className="py-3 px-3 m-0 bg-primary border-bottom border-4 border-primary">
            <p className="m-0 p-1 text-light fw-bolder fs-3 text-center">{pageTitle}</p>
          </div>

          <div className="my-4 p-5 mx-2 bg-light shadow rounded">
            <div className="row justify-content-center">
              {testData[selectedTest].map((content, index) => (
                <div className="col-md-5 my-3 p-0 mx-3" key={index}>
                  <div className="card p-0 mx-auto col-12">
                    <div className="row align-items-center">
                      <div className="col-4 p-0">
                        <img className="d-block mx-auto img-fluid" src={content.icon} alt="Icon" />
                      </div>
                      <div className="col-8 p-0">
                        <h6 className="card-title fw-bolder text-start">{content.title}</h6>
                      </div>
                    </div>
                    <div className="row align-items-center mt-3">
                      <div className="col-3 mx-auto p-0">
                        <img className="d-block mx-auto img-fluid w-25" src={StudyPageIcon5} alt="Icon" />
                        <h6 className="card-title fw-light text-center">View Solution</h6>
                      </div>
                      <div className="col-3 mx-auto p-0">
                        <img className="d-block mx-auto img-fluid w-25" src={StudyPageIcon6} alt="Icon" />
                        <h6 className="card-title fw-light text-center">Retake</h6>
                      </div>
                      <div className="col-3 mx-auto p-0">
                        <img className="d-block mx-auto img-fluid w-25" src={StudyPageIcon7} alt="Icon" />
                        <h6 className="card-title fw-light text-center">Previous Result</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
