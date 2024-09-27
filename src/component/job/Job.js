import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './../../App.css';

// Job data
export const jobs = [
    { name: "Rajshahi", jobType: "Full Time", jobHour: "8", jobSalary: "3700", jobTitle: "Manager", jobName: "SKB" },
    { name: "Dhaka", jobType: "Full Time", jobHour: "6", jobSalary: "99999", jobTitle: "Manager", jobName: "Company G" },
    { name: "Rajshahi", jobType: "Part Time", jobHour: "8", jobSalary: "999", jobTitle: "Seller", jobName: "Company A" },
    { name: "Sylhet", jobType: "Part Time", jobHour: "5", jobSalary: "899", jobTitle: "Writer", jobName: "Company B" },
    { name: "Chitagong", jobType: "Part Time", jobHour: "7", jobSalary: "7999", jobTitle: "Casher", jobName: "Company C" },
    { name: "Barishal", jobType: "Full Time", jobHour: "8", jobSalary: "6999", jobTitle: "Team Leader", jobName: "Company D" },
    { name: "Khulna", jobType: "Full Time", jobHour: "8", jobSalary: "9999", jobTitle: "Area Manager", jobName: "Company E" },
    { name: "Rangpur", jobType: "Full Time", jobHour: "3", jobSalary: "270", jobTitle: "Labor", jobName: "Company A" },
    { name: "Chitagong", jobType: "Part Time", jobHour: "9", jobSalary: "799", jobTitle: "Casher", jobName: "Company C" },
    { name: "Rajshahi", jobType: "Full Time", jobHour: "4", jobSalary: "499", jobTitle: "Team Leader", jobName: "Company D" },
    { name: "Khulna", jobType: "Part Time", jobHour: "10", jobSalary: "999", jobTitle: "Area Manager", jobName: "Company E" },
    { name: "Rangpur", jobType: "Part Time", jobHour: "5", jobSalary: "270", jobTitle: "Labor", jobName: "Company A" },
];

function Job() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedJobPosition, setSelectedJobPosition] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [minHour, setMinHour] = useState('');
  const [maxHour, setMaxHour] = useState('');
  const [companyName, setCompanyName] = useState(''); // New state for Company Name filter

  // Handlers for input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const handleJobPositionChange = (event) => {
    setSelectedJobPosition(event.target.value);
  };

  const handleMinSalaryChange = (event) => {
    setMinSalary(event.target.value);
  };

  const handleMaxSalaryChange = (event) => {
    setMaxSalary(event.target.value);
  };

  const handleMinHourChange = (event) => {
    setMinHour(event.target.value);
  };

  const handleMaxHourChange = (event) => {
    setMaxHour(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  // Filter jobs based on various criteria
  const filteredJobs = jobs.filter(job => {
    const salary = parseInt(job.jobSalary); // Convert salary to number
    const workingHour = parseInt(job.jobHour); // Convert working hours to a number

    return (
      job.name.toUpperCase().includes(searchTerm.toUpperCase()) &&
      job.jobName.toUpperCase().includes(companyName.toUpperCase()) &&
      (selectedJobType === '' || job.jobType === selectedJobType) &&
      (selectedJobPosition === '' || job.jobTitle === selectedJobPosition) &&
      (minSalary === '' || salary >= parseInt(minSalary)) &&
      (maxSalary === '' || salary <= parseInt(maxSalary)) &&
      (minHour === '' || workingHour >= parseInt(minHour)) &&
      (maxHour === '' || workingHour <= parseInt(maxHour))
    );
  });

  return (
    <div className="m-0 py-5 container mx-auto">
      <div className='d-flex flex-column justify-content-center'>
        <div className='row'>
          {/* Search Filter */}
          <div className="d-block flex-column justify-content-center col mx-3">
            <label htmlFor="JobSearch" className='form_admission_label'>Search job by Location:</label>
            <input
              id="JobSearch"
              type="text"
              className="form-control admissionPhnInput"
              value={searchTerm}
              onChange={handleSearch}
            />

            {/* Job Type Filter */}
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
          
          <div className="d-block flex-column justify-content-center col mx-3">
            {/* Company Name Filter */}
            <label htmlFor="CompanyName" className='form_admission_label'>Search by Company Name:</label>
            <input
              id="CompanyName"
              type="text"
              className="form-control admissionPhnInput"
              value={companyName}
              onChange={handleCompanyNameChange}
            />

            {/* Job Position Filter */}
            <label htmlFor="JobPosition" className='form_admission_label'>Filter by Job Position:</label>
            <select
              id="JobPosition"
              className="form-control mb-3 admissionPhnSelect2"
              value={selectedJobPosition}
              onChange={handleJobPositionChange}
            >
              <option value="">All Positions</option>
              <option value="Manager">Manager</option>
              <option value="Seller">Seller</option>
              <option value="Writer">Writer</option>
              <option value="Casher">Casher</option>
              <option value="Team Leader">Team Leader</option>
              <option value="Area Manager">Area Manager</option>
              <option value="Labor">Labor</option>
            </select>
          </div>

          {/* Salary Range Filter */}
          <div className="d-block flex-column justify-content-center col mx-3">
            <label htmlFor="minSalary" className='form_admission_label'>Minimum Salary:</label>
            <input
              id="minSalary"
              type="number"
              className="form-control admissionPhnInput col"
              value={minSalary}
              onChange={handleMinSalaryChange}
            />

            <label htmlFor="maxSalary" className='form_admission_label'>Maximum Salary:</label>
            <input
              id="maxSalary"
              type="number"
              className="form-control mb-3 admissionPhnInput col"
              value={maxSalary}
              onChange={handleMaxSalaryChange}
            />
          </div>

          {/* Working Hour Range Filter */}
          <div className="d-block flex-column justify-content-center col mx-3">
            <label htmlFor="minHour" className='form_admission_label'> Minimum Working Hours:</label>
            <input
              id="minHour"
              type="number"
              className="form-control admissionPhnInput col"
              value={minHour}
              onChange={handleMinHourChange}
            />

            <label htmlFor="maxHour" className='form_admission_label'> Maximum Working Hours:</label>
            <input
              id="maxHour"
              type="number"
              className="form-control mb-3 admissionPhnInput col"
              value={maxHour}
              onChange={handleMaxHourChange}
            />
          </div>
        </div>
      </div>

      <div>
        {filteredJobs.length === 0 ? (
          <div className="text-center">No jobs found</div>
        ) : (
          <div className="d-flex flex-row flex-wrap">
            {filteredJobs.map((job, index) => (
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Job;
