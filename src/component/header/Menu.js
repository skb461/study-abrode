// Menu.js
import React from 'react';
import './../../App.css';

function Menu() {
  return (
    <div className="App">
      <header className="App-header d-flex">
        <h1 className="text-center me-auto">
          Study<br />Abroad
        </h1>

        <form className="d-flex mx-auto py-3">
          <input
            className="form-control search text-center"
            type="text"
            placeholder="Search courses, university, scholarship or events"
          />
          <button className="btn btn_blue" type="button">
            Search
          </button>
        </form>

        <button className="btn btn_blue ms-auto px-5 py-2 my-4 fw-bold">
          Sign Up
        </button>
      </header>
    </div>
  );
}

export default Menu;
