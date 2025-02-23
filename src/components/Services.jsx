import React from 'react';
import "./Services.css";
import 'animate.css';
const Services = () => {
  return (
   <>
        {/* Service Start  */}
    <div class="container-fluid bg-light my-5 py-6" id="service">
        <div class="container">
        <div class="row g-5 mb-5 ">
    <div class="col-lg-6">
        <h1 class="display-5 mb-0">My Services</h1>
    </div>
    <div class="col-lg-6 text-lg-end">
    <a class="btn btn-primary py-3 px-5" href="#hire">Hire Me</a>
</div>
</div>

            <div class="row g-4 ">
                <div class="col-lg-6 slide-in animate__animated animate__backInLeft" data-wow-delay="0.1s">
                    <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div class="bg-icon flex-shrink-0 mb-3">
        
                            <i class="fa fa-laptop-code  fa-2x text-dark"></i>
                        </div>
                        <div class="ms-sm-4">
                            <h4 class="mb-3">Web Design</h4>
                            <span>Get a professional website designed to grow your business and services! I create responsive, user-friendly websites that attract more customers. Let’s boost your Business success today!</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 animate__animated animate__backInRight  " data-wow-delay="0.3s">
                    <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div class="bg-icon flex-shrink-0 mb-3">
                            <i className="fas fa-paint-brush fa-2x text-dark"></i> 
                        </div>
                        <div class="ms-sm-4">
                            <h4 class="mb-3 ">Frontend Development</h4>
                            <span> I provide professional frontend development services, creating responsive and visually appealing websites with clean code and great UI designs. Let's bring your ideas to life! </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 animate__animated animate__backInLeft" data-wow-delay="0.1s">
                    <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div class="bg-icon flex-shrink-0 mb-3">
                            <i className="fas fa-server fa-2x text-dark"></i>
                        </div>
                        <div class="ms-sm-4">
                            <h4 class="mb-3 ">Backend Development</h4>

                            <span>I provide backend development services to build secure, fast, and reliable systems for your website or app.</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 animate__animated animate__backInRight" data-wow-delay="0.3s">
                    <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div class="bg-icon flex-shrink-0 mb-3">
                            <i className="fas fa-database  fa-2x text-dark"></i>
                        </div>
                        <div class="ms-sm-4">
                            <h4 class="mb-3">DataBase Management</h4>

                            <span>I offer database management services to organize, secure, and optimize your website's data for smooth performance.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   {/* Service End  */}
   </>
  );
}

export default Services;
