import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6 text-md-start mb-3 mb-md-0">
            &copy; {new Date().getFullYear()}{" "}
            <a className="text-secondary text-decoration-none" href="#">
              Amna Khan
            </a>
            , All Rights Reserved.
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-md-end">
            Designed by{" "}
            <a className="text-secondary text-decoration-none " href="#">
              Amna Khan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
