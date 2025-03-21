import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5">
        {/* Mobile Brand */}
        <a href="#home" className="navbar-brand d-block d-lg-none">
          <h1 className="text-primary fw-bold m-0">Amna Khan</h1>
        </a>

        {/* Toggler Button */}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Brand Logo for Desktop */}
        <a href="#home" className="navbar-brand mx-3 d-none d-lg-block">
        <h1 className="text-primary fw-bold custom-name-gradient">Amna Khan</h1>


        </a>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
          id="navbarCollapse"
        >
    
          <div className="navbar-nav ms-auto py-0 ">
          <ul className="navbar-nav ms-auto d-flex justify-content-end ">
         <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#Skill" className="nav-item nav-link">
              Skills
            </a>
            <a href="#service" className="nav-item nav-link">
              Services
            </a>
            <a href="#pro" className="nav-item nav-link">
              Projects
            </a>
         
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
         </ul>
          </div>
      
        </div>
      </nav>
      {/* Navbar End */}

     
    </>
  );
};

export default Navbar;
