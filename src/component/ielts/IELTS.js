// IELTS.js
import React, { useState } from 'react';
import './../../App.css';

// Importing images
import cambridge from './image/cambridge.png';
import oxford from './image/oxford.png'; // Add more images as needed
import mit from './image/mit.png';
import stanford from './image/stanford.png';
import harvard from './image/harvard.jpg';
import rankIcon from './image/ranking.png';
import campusIcon from './image/campus.png';
import courseIcon from './image/homework.png';
import scholarshipIcon from './image/mortarboard.png';

// UniversityCard component
function UniversityCard({ university }) {
  return (
    <div className="card p-0 mx-auto h-100" style={{ width: "400px" }}>
      <img
        className="card-img-top mx-auto w-50"
        src={university.image}
        alt={`${university.name} Logo`}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title fw-bolder">{university.name}</h3>

        <p className="card-text">
          <strong>Location:</strong>{" "}
          <span className="text-muted fw-bolder">{university.location}</span>
        </p>

        <p className="card-text">
          <strong>Attendance:</strong>{" "}
          <span className="text-muted fw-bolder">{university.attendance}</span>
        </p>

        <div className="row my-2">
          <div className="col-6 d-flex align-items-center">
            <img
              src={rankIcon}
              alt="Global Rank Icon"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <p className="card-text mb-0">
              <strong>Global Rank:</strong>{" "}
              <span className="text-muted fw-bolder">{university.rank}</span>
            </p>
          </div>
          <div className="col-6 d-flex align-items-center">
            <img
              src={campusIcon}
              alt="Institution Type Icon"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <p className="card-text mb-0">
              <strong>Institution Type:</strong>{" "}
              <span className="text-muted fw-bolder">{university.type}</span>
            </p>
          </div>
        </div>

        <div className="row my-2 mb-4">
          <div className="col-6 d-flex align-items-center">
            <img
              src={courseIcon}
              alt="Subjects Icon"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <p className="card-text mb-0">
              <strong>Subjects:</strong>{" "}
              <span className="text-muted fw-bolder">{university.subjects}</span>
            </p>
          </div>
          <div className="col-6 d-flex align-items-center">
            <img
              src={scholarshipIcon}
              alt="Scholarships Icon"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <p className="card-text mb-0">
              <strong>Scholarships:</strong>{" "}
              <span className="text-muted fw-bolder">{university.scholarships}</span>
            </p>
          </div>
        </div>

        <hr className="bg-primary my-3" style={{ height: "5px" }} />

        <button className="btn btn-primary job_blue_button mt-auto">
          See Details
        </button>
      </div>
    </div>
  );
}

function IELTS() {
  // Sample university data with extended fields
  const universities = [
    {
      name: 'Cambridge University',
      image: cambridge,
      location: 'United Kingdom',
      attendance: 'On Campus',
      rank: 170,
      type: 'Public',
      subjects: 358,
      scholarships: 58,
      ieltsScore: 7.5,
      costOfStudy: '£20,000 - £30,000',
      degreeType: ['Bachelor', 'Master', 'PhD'],
      oLevelResult: 'AAB',
      aLevelResult: 'A*AA',
      courseDuration: '3-4 years'
    },
    {
      name: 'Oxford University',
      image: oxford,
      location: 'United Kingdom',
      attendance: 'On Campus',
      rank: 120,
      type: 'Public',
      subjects: 400,
      scholarships: 65,
      ieltsScore: 7.0,
      costOfStudy: '£18,000 - £28,000',
      degreeType: ['Bachelor', 'Master', 'PhD'],
      oLevelResult: 'ABB',
      aLevelResult: 'AAA',
      courseDuration: '3-4 years'
    },
    {
      name: 'MIT',
      image: mit,
      location: 'United States',
      attendance: 'Online',
      rank: 1,
      type: 'Private',
      subjects: 300,
      scholarships: 45,
      ieltsScore: 7.5,
      costOfStudy: '$50,000 - $70,000',
      degreeType: ['Bachelor', 'Master', 'PhD'],
      oLevelResult: 'AAB',
      aLevelResult: 'A*AB',
      courseDuration: '4 years'
    },
    {
      name: 'Stanford University',
      image: stanford,
      location: 'United States',
      attendance: 'On Campus',
      rank: 2,
      type: 'Private',
      subjects: 350,
      scholarships: 50,
      ieltsScore: 7.5,
      costOfStudy: '$55,000 - $75,000',
      degreeType: ['Bachelor', 'Master', 'PhD'],
      oLevelResult: 'AAB',
      aLevelResult: 'A*A',
      courseDuration: '4 years'
    },
    {
      name: 'Harvard University',
      image: harvard,
      location: 'United States',
      attendance: 'On Campus',
      rank: 3,
      type: 'Private',
      subjects: 360,
      scholarships: 55,
      ieltsScore: 7.0,
      costOfStudy: '$50,000 - $70,000',
      degreeType: ['Bachelor', 'Master', 'PhD'],
      oLevelResult: 'ABB',
      aLevelResult: 'AAA',
      courseDuration: '4 years'
    }
    // Add more universities as needed
  ];

  // Define filter options
  const filterOptions = {
    ieltsScore: [6.0, 6.5, 7.0, 7.5, 8.0],
    subject: ['Engineering', 'Business', 'Arts', 'Science', 'Medicine'],
    country: ['United Kingdom', 'United States'],
    scholarship: ['Available', 'Not Available'],
    attendance: ['On Campus', 'Online'],
    institutionType: ['Public', 'Private'],
    costOfStudy: ['£10,000 - £20,000', '£20,000 - £30,000', '$20,000 - $40,000', '$40,000 - $60,000', '$60,000 - $80,000'],
    degreeType: ['Bachelor', 'Master', 'PhD'],
    oLevelResult: ['AAB', 'ABB'],
    aLevelResult: ['AAA', 'A*AA', 'A*A'],
    courseDuration: ['3-4 years', '4 years']
  };

  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    ieltsScore: [],
    subject: [],
    country: [],
    scholarship: [],
    attendance: [],
    institutionType: [],
    costOfStudy: [],
    degreeType: [],
    oLevelResult: [],
    aLevelResult: [],
    courseDuration: []
  });

  // Handle checkbox changes
  const handleFilterChange = (category, value) => {
    setSelectedFilters(prevFilters => {
      const categoryFilters = prevFilters[category];
      if (categoryFilters.includes(value)) {
        // Remove the value
        return {
          ...prevFilters,
          [category]: categoryFilters.filter(item => item !== value)
        };
      } else {
        // Add the value
        return {
          ...prevFilters,
          [category]: [...categoryFilters, value]
        };
      }
    });
  };

  // Filtering logic
  const filteredUniversities = universities.filter(university => {
    // IELTS Score Filter
    if (selectedFilters.ieltsScore.length > 0) {
      if (!selectedFilters.ieltsScore.includes(university.ieltsScore)) {
        return false;
      }
    }

    // Subject Filter
    if (selectedFilters.subject.length > 0) {
      // Assuming 'subjects' field contains the number of subjects, you might need to adjust this
      // If subjects are categories, you need to change the data structure accordingly
      // For demonstration, we'll skip this filter or assume all universities have all subjects
    }

    // Country Filter
    if (selectedFilters.country.length > 0) {
      if (!selectedFilters.country.includes(university.location)) {
        return false;
      }
    }

    // Scholarship Filter
    if (selectedFilters.scholarship.length > 0) {
      const hasScholarship = university.scholarships > 0 ? 'Available' : 'Not Available';
      if (!selectedFilters.scholarship.includes(hasScholarship)) {
        return false;
      }
    }

    // Attendance Filter
    if (selectedFilters.attendance.length > 0) {
      if (!selectedFilters.attendance.includes(university.attendance)) {
        return false;
      }
    }

    // Institution Type Filter
    if (selectedFilters.institutionType.length > 0) {
      if (!selectedFilters.institutionType.includes(university.type)) {
        return false;
      }
    }

    // Cost of Study Filter
    if (selectedFilters.costOfStudy.length > 0) {
      if (!selectedFilters.costOfStudy.includes(university.costOfStudy)) {
        return false;
      }
    }

    // Degree Type Filter
    if (selectedFilters.degreeType.length > 0) {
      const hasDegreeType = university.degreeType.some(type => selectedFilters.degreeType.includes(type));
      if (!hasDegreeType) {
        return false;
      }
    }

    // O-Level Result Filter
    if (selectedFilters.oLevelResult.length > 0) {
      if (!selectedFilters.oLevelResult.includes(university.oLevelResult)) {
        return false;
      }
    }

    // A-Level Result Filter
    if (selectedFilters.aLevelResult.length > 0) {
      if (!selectedFilters.aLevelResult.includes(university.aLevelResult)) {
        return false;
      }
    }

    // Course Duration Filter
    if (selectedFilters.courseDuration.length > 0) {
      if (!selectedFilters.courseDuration.includes(university.courseDuration)) {
        return false;
      }
    }

    return true;
  });
  

  return (
    <div className="container mt-2 mb-5">
      <div className="row">
        {/* Filter Section */}
        <div className="col-4 px-2 shadow sticky-top bg-white rounded pt-5 pb-2 px-2" style={{ overflowY: 'auto' }}>
          <h1 className="card-title fw-bolder text-center">Filter Section</h1>
          <hr />

          {/* IELTS Score Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>IELTS Score</h6>
            {filterOptions.ieltsScore.map(score => (
              <div className="form-check py-1 form-switch" key={score}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={score}
                  id={`ielts-${score}`}
                  onChange={() => handleFilterChange('ieltsScore', score)}
                  checked={selectedFilters.ieltsScore.includes(score)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`ielts-${score}`}>
                  {score}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* Subject Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>Subject</h6>
            {filterOptions.subject.map(subject => (
              <div className="form-check py-1 form-switch" key={subject}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={subject}
                  id={`subject-${subject}`}
                  onChange={() => handleFilterChange('subject', subject)}
                  checked={selectedFilters.subject.includes(subject)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`subject-${subject}`}>
                  {subject}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* Country Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>Country</h6>
            {filterOptions.country.map(country => (
              <div className="form-check py-1 form-switch" key={country}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={country}
                  id={`country-${country}`}
                  onChange={() => handleFilterChange('country', country)}
                  checked={selectedFilters.country.includes(country)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`country-${country}`}>
                  {country}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* Scholarship Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>Scholarship</h6>
            {filterOptions.scholarship.map(option => (
              <div className="form-check py-1 form-switch" key={option}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={option}
                  id={`scholarship-${option}`}
                  onChange={() => handleFilterChange('scholarship', option)}
                  checked={selectedFilters.scholarship.includes(option)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`scholarship-${option}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* Attendance Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>Attendance</h6>
            {filterOptions.attendance.map(option => (
              <div className="form-check py-1 form-switch" key={option}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={option}
                  id={`attendance-${option}`}
                  onChange={() => handleFilterChange('attendance', option)}
                  checked={selectedFilters.attendance.includes(option)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`attendance-${option}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* Institution Type Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>Institution Type</h6>
            {filterOptions.institutionType.map(type => (
              <div className="form-check py-1 form-switch" key={type}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={type}
                  id={`type-${type}`}
                  onChange={() => handleFilterChange('institutionType', type)}
                  checked={selectedFilters.institutionType.includes(type)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`type-${type}`}>
                  {type}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* Cost of Study Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>Cost of Study</h6>
            {filterOptions.costOfStudy.map(cost => (
              <div className="form-check py-1 form-switch" key={cost}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={cost}
                  id={`cost-${cost}`}
                  onChange={() => handleFilterChange('costOfStudy', cost)}
                  checked={selectedFilters.costOfStudy.includes(cost)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`cost-${cost}`}>
                  {cost}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* Degree Type Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>Degree Type</h6>
            {filterOptions.degreeType.map(degree => (
              <div className="form-check py-1 form-switch" key={degree}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={degree}
                  id={`degree-${degree}`}
                  onChange={() => handleFilterChange('degreeType', degree)}
                  checked={selectedFilters.degreeType.includes(degree)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`degree-${degree}`}>
                  {degree}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* O-Level Result Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>O-Level Result</h6>
            {filterOptions.oLevelResult.map(result => (
              <div className="form-check py-1 form-switch" key={result}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={result}
                  id={`olevel-${result}`}
                  onChange={() => handleFilterChange('oLevelResult', result)}
                  checked={selectedFilters.oLevelResult.includes(result)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`olevel-${result}`}>
                  {result}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* A-Level Result Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>A-Level Result</h6>
            {filterOptions.aLevelResult.map(result => (
              <div className="form-check py-1 form-switch" key={result}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={result}
                  id={`alevel-${result}`}
                  onChange={() => handleFilterChange('aLevelResult', result)}
                  checked={selectedFilters.aLevelResult.includes(result)}
                />
                <label className="form-check-label fw-light text-muted" htmlFor={`alevel-${result}`}>
                  {result}
                </label>
              </div>
            ))}
          </div>
          <hr />

          {/* Course Duration Filter */}
          <div className="mb-3 bg-white p-4 rounded">
            <h6 className="text-dark fw-bolder fs-3" style={{color: "rgba(0, 23, 45, 1)"}}>Course Duration</h6>
            {filterOptions.courseDuration.map(duration => (
              <div className="form-check py-1 form-switch" key={duration}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={duration}
                  id={`duration-${duration}`}
                  onChange={() => handleFilterChange('courseDuration', duration)}
                  checked={selectedFilters.courseDuration.includes(duration)}
                />
                <label className="form-check-label" htmlFor={`duration-${duration}`}>
                  {duration}
                </label>
              </div>
            ))}
          </div>

          {/* Reset Filters Button */}
          <button
            className="btn btn-primary job_blue_button col-12 mt-3"
            onClick={() => setSelectedFilters({
              ieltsScore: [],
              subject: [],
              country: [],
              scholarship: [],
              attendance: [],
              institutionType: [],
              costOfStudy: [],
              degreeType: [],
              oLevelResult: [],
              aLevelResult: [],
              courseDuration: []
            })}
          >
            Reset Filters
          </button>
        </div>

        {/* University Card Section */}
        <div className="col-8">
          <div className="row justify-content-center">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((university, index) => (
                <div key={index} className="col-md-6 my-3 d-flex align-items-stretch">
                  <UniversityCard university={university} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-center">No universities match the selected filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IELTS;
