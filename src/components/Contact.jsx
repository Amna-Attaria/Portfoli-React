import React from "react";
import "./Contacts.js"; 

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    console.log("Form submitted");
  };

  return (
    <>
      <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Let's Work Together</h1>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="mb-2">Contact me</p>
              <h3 className="fw-bold fs-5">+92172153364</h3>
              <hr className="w-100" />
              <p className="mb-2">Mail me:</p>
              <h3 className="fw-bold fs-5">amna12khan26@gmail.com</h3>
              <hr className="w-100" />
              <p className="mb-2">Follow me:</p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-primary me-2" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="mailto:amna12khan26@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  className="btn btn-square btn-primary me-2"
                  href="https://github.com/Amna-Attaria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="btn btn-square btn-primary me-2"
                  href="https://www.linkedin.com/in/amna-khan6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                  <div class="form-floating" id="hire">
    <input type="text" class="form-control" id="name" placeholder="Your Name" />
    <label for="name">Your Name</label>
</div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit" id="submitform">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
