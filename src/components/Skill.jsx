import React, { useEffect } from "react";
import "./Skill.css";

const Skill = () => {
  useEffect(() => {
    const skills = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("aria-valuenow") + "%";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skills.forEach((skill) => {
      observer.observe(skill);
    });
  }, []);

  return (
    <>
      {/* Skills Section */}
      <div className="container-xxl py-6" id="skill" style={{ backgroundColor: "#FAFAFB" }}>
        <div className="container">
          <h1 className="display-5 mb-5 text-center" style={{ color: "#12141D" }}>
            Skills
          </h1>
          <div className="row g-5">
            {/* Frontend Skills Card */}
            <div className="col-lg-4">
              <div className="card skill-card">
                <div className="card-body">
                  <h4 className="card-title text-center mb-4" style={{ color: "#6244C5" }}>
                    Frontend Skills
                  </h4>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>HTML</h6>
                      <h6>95%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>CSS</h6>
                      <h6>85%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>JavaScript</h6>
                      <h6>80%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>React</h6>
                      <h6>80%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>Tailwind</h6>
                      <h6>80%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills Card */}
            <div className="col-lg-4">
              <div className="card skill-card">
                <div className="card-body">
                  <h4 className="card-title text-center mb-4" style={{ color: "#FFC448" }}>
                    Backend Skills
                  </h4>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>PHP</h6>
                      <h6>70%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>Firebase</h6>
                      <h6>80%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Skills & Others */}
            <div className="col-lg-4">
              <div className="card skill-card">
                <div className="card-body">
                  <h4 className="card-title text-center mb-4" style={{ color: "#12141D" }}>
                    Database & Others
                  </h4>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>MySQL</h6>
                      <h6>75%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>SQL Server</h6>
                      <h6>75%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6>Git</h6>
                      <h6>85%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
