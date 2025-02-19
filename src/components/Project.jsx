import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Project.css";

const Project = () => {
  const [filter, setFilter] = useState("all"); // Initial state to show all projects

  // Projects data
  const projects = [
    {
      id: 1,
      category: "HTML & CSS",
      title: "Coffee Shop",
      description: "This Coffee Shop Page was made using HTML, CSS, and JavaScript.",
      img: "/coffeeshop.png",
      link: "https://web-page-peach-pi.vercel.app/",
    },
    {
      id: 2,
      category: "HTML & CSS",
      title: "Nike Shoes",
      description: "This Shoes Ecommers WebPage was made using HTML CSS.",
      img: "/nike.png",
      link: "https://real-estate-web-page-whie.vercel.app/",
    },
    {
      id: 3,
      category: "HTML & CSS",
      title: "Fanimation",
      description: "This WebSite was made using HTML CSS Bootstrap JavaScript Jquery.",
      img: "/fan.png",
      link: "https://664f4ad042e2bf0ade27ab87--vermillion-melomakarona-d28f15.netlify.app/contact",
    },
    {
      id: 4,
      category: "JavaScript",
      title: "Calculator",
      description: "This Calculator was made using JavaScript.",
      img: "/claculator.png",
      link: "https://calculator-beta-eight-12.vercel.app/",
    },
    {
      id: 5,
      category: "JavaScript",
      title: "Animation Game",
      description: "This Game was made using JavaScript.",
      img: "/game.png",
      link: "https://animation-game-hazel.vercel.app",
    },
    {
      id: 6,
      category: "FireBase",
      title: "Blog App",
      description: "This Blog APP was made using HTML, CSS, JavaScript, Firebase.",
      img: "/hackathone.jpg",
      link: "https://amna-attaria.github.io/Hackathone-Fire-Base/",
    },
    {
      id: 7,
      category: "React",
      title: "Post App",
      description: "This Post App was made using HTML, CSS, JavaScript, Firebase.",
      img: "/post.png",
      link: "https://post-app-fire-base-authentication.vercel.app/",
    },
  ];

  // Filtered Projects Logic
  const filteredProjects =
    filter === "all"
      ? projects // Show all projects initially
      : projects.filter((project) => project.category === filter);

  return (
    <div className="container-fluid portfolio-btn pro-section">
      <h1 className="text-center" id="pro">
        MY Projects
      </h1>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button className="btn-custom" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="btn-custom" onClick={() => setFilter("HTML & CSS")}>
          HTML & CSS
        </button>
        <button className="btn-custom" onClick={() => setFilter("JavaScript")}>
          JavaScript
        </button>
        <button className="btn-custom" onClick={() => setFilter("React")}>
          React
        </button>
        <button className="btn-custom" onClick={() => setFilter("FireBase")}>
          FireBase
        </button>
      </div>

      <div className="row mt-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="col-lg-3 col-sm-6 animate__animated animate__backInUp"
          >
            <Card className="me-3 custom-card mt-3">
              <Card.Img
                variant="top"
                src={project.img}
                className="card-image mt-2"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
