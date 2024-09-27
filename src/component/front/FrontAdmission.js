import React, { useState } from 'react';
import './../../App.css';
import admission_image_1 from './image/admission_image_1.jpg';

function FrontAdmission() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    counselling: '',
    fund: '',
    studyLevel: '',
    office: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="m-0 py-5">
      <div className="container mx-auto">
        <p className="text-dark text-center pt-5 fs-3">Study Abroad Can Help You</p>
        <div className="row py-2">
          <div className="col-6">
            <form onSubmit={handleSubmit} className="needs-validation form_admission">
              <div className="row my-4">
                <div className="col">
                  <label htmlFor="fName" className='form_admission_label'>First Name:</label>
                  <input
                    id="fName"
                    type="text"
                    className="form-control admissionPhnInput"
                    name="fName"
                    value={formData.fName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="lName" className='form_admission_label'>Last Name:</label>
                  <input
                    id="lName"
                    type="text"
                    className="form-control admissionPhnInput"
                    name="lName"
                    value={formData.lName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="my-4">
                <label htmlFor="email" className='form_admission_label'>Email Address:</label>
                <input
                  id="email"
                  type="email"
                  className="form-control admissionPhnInput"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-4">
                <label htmlFor="phone" className='form_admission_label'>Phone Number:</label>
                <div className="input-group">
                  <select className="form-select admissionPhnSelect">
                    <option>+880</option>
                    <option>+961</option>
                    <option>+778</option>
                    <option>+561</option>
                  </select>
                  <input
                    type="text"
                    id="phone"
                    className="form-control admissionPhnInput"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col">
                  <label htmlFor="destination" className='form_admission_label'>Your preferred study destination:</label>
                  <select
                    className="form-select admissionPhnSelect2"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Ireland">Ireland</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="UK">UK</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="date" className='form_admission_label'>When do you plan to study:</label>
                  <input
                    id="date"
                    type="date"
                    className="form-control admissionPhnInput"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col">
                  <label htmlFor="counselling" className='form_admission_label'>Preferred mode of counselling:</label>
                  <select
                    className="form-select admissionPhnSelect2"
                    id="counselling"
                    name="counselling"
                    value={formData.counselling}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="In-person">In-person</option>
                    <option value="Virtual Counselling">Virtual Counselling</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="fund" className='form_admission_label'>How would you fund your education:</label>
                  <select
                    className="form-select admissionPhnSelect2"
                    id="fund"
                    name="fund"
                    value={formData.fund}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Self-Funded">Self-Funded</option>
                    <option value="Parents">Parents</option>
                    <option value="Seeking Scholarship">Seeking Scholarship</option>
                    <option value="Seeking Government Scholarship">Seeking Government Scholarship</option>
                    <option value="Have Government Scholarship">Have Government Scholarship</option>
                    <option value="Bank Loan">Bank Loan</option>
                    <option value="Other">Other</option>
                    <option value="Employer Scholarship">Employer Scholarship</option>
                  </select>
                </div>
              </div>
              <div className="row my-4">
                <div className="col">
                  <label htmlFor="studyLevel" className='form_admission_label'>Preferred study level:</label>
                  <select
                    className="form-select admissionPhnSelect2"
                    id="studyLevel"
                    name="studyLevel"
                    value={formData.studyLevel}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="English Language">English Language</option>
                    <option value="School">School</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Vocational">Vocational</option>
                    <option value="University Preparation">University Preparation</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="office" className='form_admission_label'>Nearest IDP Office:</label>
                  <select
                    className="form-select admissionPhnSelect2"
                    id="office"
                    name="office"
                    value={formData.office}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Dhaka – Dhanmondi">Dhaka – Dhanmondi</option>
                    <option value="Dhaka – Gulshan">Dhaka – Gulshan</option>
                    <option value="Sylhet">Sylhet</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="mt-3 btn btn-primary fw-bold py-3 px-5 col-6">Submit</button>
            </form>
          </div>
          <div className="col-6">
            <img src={admission_image_1} className="admissionImage d-block mx-auto" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontAdmission;
