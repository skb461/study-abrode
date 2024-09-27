// FrontJob.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './../../App.css';
import { jobs } from '../job/Job'; // Ensure to export jobs from Job.js

function FrontJob() {
  const options = {
    responsive: {
      0: { items: 1 },
      700: { items: 1 },
      800: { items: 2 },
      1000: { items: 3 },
    },
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    loop: true,
    dots: false,
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toUpperCase());
  };

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  // Filter jobs based on search term and job type
  const filteredJobs = jobs.filter(job => {
    return (
      job.name.toUpperCase().includes(searchTerm) &&
      (selectedJobType === '' || job.jobType === selectedJobType)
    );
  });

  // Get the first 5 filtered jobs
  const displayedJobs = filteredJobs.slice(0, 5);

  return (
    <div className="m-0 py-5">
      <div className="row align-middle m-0 px-5">
        <p className="text-dark text-left fs-3 col">Recent Job Circular</p>
        <div className="d-grid d-md-flex justify-content-end col">
          <Link to="/Job" className="job_blue_button mt-3 btn fw-bold py-3 px-5">Explore All</Link>
        </div>
      </div>

      <div className="container mx-auto mt-2">
        <div className='row'>
          <div className='col-3 d-flex flex-column justify-content-center'>
            {/* Search Filter */}
            <div className="d-block flex-column justify-content-center">
              <label htmlFor="JobSearch" className='form_admission_label'>Search job by Location:</label>
              <input
                id="JobSearch"
                type="text"
                className="form-control admissionPhnInput mb-3"
                placeholder=""
                name="JobSearch"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            {/* Job Type Filter */}
            <div className="d-block flex-column justify-content-center">
              <label htmlFor="JobType" className='form_admission_label'>Filter by Job Type:</label>
              <select
                id="JobType"
                className="form-control mb-3 admissionPhnSelect2"
                value={selectedJobType}
                onChange={handleJobTypeChange}
              >
                <option value="">All Job Types</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
          </div>

          <div className='col-9'>
            <OwlCarousel id="myUL" className='owl-theme' loop margin={10} autoplay {...options}>
              {displayedJobs.map((job, index) => (
                <div className='p-2' key={index}>
                  <div className="card job_card py-4 px-4 mx-auto m1">
                    <p className="card-title fw-bold text-dark">Job Name</p>
                    <p className="card-title fw-light text-muted">{job.jobName}</p>
                    <hr className='pt-1 bg-dark' />

                    <div className='row'>
                      <div className='col'>
                        <p className="card-title fw-bold text-dark text-start">Job Position</p>
                      </div>
                      <div className='col'>
                        <p className="card-title fw-bold text-dark text-end">Salary</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p className="card-title fw-light text-muted text-start">{job.jobTitle}</p>
                      </div>
                      <div className='col'>
                        <p className="card-title fw-light text-muted text-end">${job.jobSalary}</p>
                      </div>
                    </div>
                    <hr className='pt-1 bg-dark' />

                    <div className='row'>
                      <div className='col'>
                        <p className="card-title fw-bold text-dark text-start">Job Type</p>
                      </div>
                      <div className='col'>
                        <p className="card-title fw-bold text-dark text-end">Working Hour</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p className="card-title fw-light text-muted text-start">{job.jobType}</p>
                      </div>
                      <div className='col'>
                        <p className="card-title fw-light text-muted text-end">{job.jobHour} Hours/Day</p>
                      </div>
                    </div>
                    <hr className='pt-1 bg-dark' />

                    <p className="card-title fw-bold text-dark">Job Location</p>
                    <p className="card-title fw-light text-muted">
                      <Link className='btn' to="#">{job.name}</Link>
                    </p>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontJob;
