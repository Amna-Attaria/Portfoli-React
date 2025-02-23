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
        <div className="container mt-3">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
              <h3 className="head text-primary mb-3">I'm</h3>
              <h1 className="display-3 mb-3">Amna Khan</h1>
              <h2 className="typed-text-output d-inline"></h2>
              <div className="d-flex align-items-center pt-5">
              <a
  href="/cv.pdf" // Update the path to your CV file
  className="btn btn-primary py-3 px-4 me-5"
  download
>
  Download CV
</a>
              </div>
              <div class="d-flex pt-2 mt-3">
              <a class="btn btn-square btn-primary me-2" href="https://mail.google.com/mail/?view=cm&fs=1&to=amna12khan26@gmail.com" target="_blank">
  <i class="fas fa-envelope"></i>
</a>
<a class="btn btn-square btn-primary me-2 target_blank" href="https://github.com/Amna-Attaria" target="_blank">
  <i class="fab fa-github "></i>
</a>
<a class="btn btn-square btn-primary me-2 target_blank" href="https://www.linkedin.com/in/amna-khan6">
  <i class="fab fa-linkedin-in"></i>
</a>

                        <a class="btn btn-square btn-primary me-2 target_blank" href=""><i class="fab fa-facebook-f"></i></a>

                       
                    </div>
            </div>
    
<div class="col-lg-6 mb-5 mt-5">
  <img class="img-fluid slide-in" src="/profile.png" alt="Profile" width="90%" />
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
