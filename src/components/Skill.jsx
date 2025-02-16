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
    <div className="skills-section" id="Skill">
      <div className="container py-6" id="skills">
      <h1 className=" section-title text-center ">Skills</h1>
        <div className="skills-grid">
          {/* Frontend Skills */}
          <div className="skill-card col">
            <h4 className="skill-title">
              <i className="fas fa-paint-brush"></i> Frontend Skills
            </h4>
            <div className="skill">
              <span>HTML</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill">
              <span>CSS</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill">
              <span>React</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill">
              <span>Angular</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill-card col">
            <h4 className="skill-title">
              <i className="fas fa-server"></i> Backend Skills
            </h4>
            <div className="skill">
              <span>PHP</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill">
              <span>Firebase</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Database Skills */}
          <div className="skill-card col">
            <h4 className="skill-title">
              <i className="fas fa-database"></i> Database Skills
            </h4>
            <div className="skill">
              <span>MySQL</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill">
              <span>SQL Server</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          
          </div>
 {/* Frame work  */}
 <div className="skill-card col">
            <h4 className="skill-title">
            <i className="fas fa-tools"></i> Frameworks & Tools
            </h4>
            <div className="skill">
              <span>Bootstap</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill">
              <span>Tailwind</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill">
              <span>Git</span>
              <div className="progress">
                <div
                  className="progress-bar"
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
  );
};

export default Skill;
