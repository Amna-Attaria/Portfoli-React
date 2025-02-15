import React, { useEffect } from 'react';
import Typed from 'typed.js'; // For typed text effect
import './HeroSection.css'; // Add your custom styles here

const HeroSection = () => {
  useEffect(() => {
    // Initialize Typed.js for the typing effect
    const typed = new Typed('.typed-text-output', {
      strings: [
        'Web Designer',
        'Web Developer',
        'Front End Developer',
        'Apps Designer',
        'Apps Developer',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    // Cleanup Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container-fluid bg-light my-6 mt-0" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
              <h3 className="head text-primary mb-3">I'm</h3>
              <h1 className="display-3 mb-3">Amna Attaria</h1>
              <h2 className="typed-text-output d-inline"></h2>
              <div className="d-flex align-items-center pt-5">
                <a
                  href="/path-to-your-cv.pdf" // Update the path to your CV file
                  className="btn btn-primary py-3 px-4 me-5"
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
            <div class="col-lg-6 mb-5">
            <img className="img-fluid " src="/profile.png" alt="Profile" width="90%" />

                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
