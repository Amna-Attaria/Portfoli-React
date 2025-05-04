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
      description: "A Coffee Shop webpage built using HTML, CSS, and JavaScript.",
      img: "/coffeeshop.png",
      link: "https://web-page-peach-pi.vercel.app/",
    },
    {
      id: 2,
      category: "HTML & CSS",
      title: "Nike Shoes",
      description: "A Nike Shoes eCommerce webpage designed with HTML and CSS.",
      img: "/nike.png",
      link: "https://real-estate-web-page-whie.vercel.app/",
    },
    {
      id: 3,
      category: "HTML & CSS",
      title: "Fanimation",
      description: "A website created using HTML, CSS, Bootstrap, JavaScript, and jQuery.",
      img: "/fan.png",
      link: "https://664f4ad042e2bf0ade27ab87--vermillion-melomakarona-d28f15.netlify.app/contact",
    },
    {
      id: 4,
      category: "JavaScript",
      title: "Calculator",
      description: "A fully functional calculator built using JavaScript.",
      img: "/claculator.png",
      link: "https://calculator-beta-eight-12.vercel.app/",
    },
    {
      id: 5,
      category: "JavaScript",
      title: "Animation Game",
      description: "An interactive animation game developed with JavaScript.",
      img: "/game.png",
      link: "https://animation-game-hazel.vercel.app",
    },
    {
      id: 6,
      category: "FireBase",
      title: "Blog App",
      description: "A Blog App built using HTML, CSS, JavaScript, and Firebase for authentication and database management.",
      img: "/hackathone.jpg",
      link: "https://amna-attaria.github.io/Hackathone-Fire-Base/",
    },
    {
      id: 7,
      category: "FireBase",
      title: "Post App",
      description: "A Post App created with HTML, CSS, JavaScript, and Firebase for storing and managing posts.",
      img: "/post.png",
      link: "https://post-app-fire-base-authentication.vercel.app/",
    },
    {
      id: 8,
      category: "HTML & CSS",
      title: "Specie Shield",
      description: "A responsive website developed using HTML, CSS, and JavaScript.",
      img: "/sheild.png",
      link: "https://67bb77794b59d79771203c1d--magnificent-moxie-6836c0.netlify.app/",
    },
    {
      id: 9,
      category: "React",
      title: "Portfolio",
      description: "A personal portfolio website designed with HTML, CSS, JavaScript, and React.",
      img: "/portfolio.png",
      link: "https://portfoli-react.vercel.app/",
    },
    {
      id: 10,
      category: "HTML & CSS",
      title: "Search Movie",
      description: "A movie search project utilizing HTML, CSS, JavaScript, and an API to fetch movie data.",
      img: "/movie.png",
      link: "https://67bb77794b59d79771203c1d--magnificent-moxie-6836c0.netlify.app/",
    },
    {
      id: 11,
      category: "React",
      title: "Post App",
      description: "A post management app built using React and TanStack Query.",
      img: "/postapp.png",
      link: "https://tanstack-query-six.vercel.app/",
    },
    {
      id: 12,
      category: "React",
      title: "Add Product",
      description: "A product management page created with React and TanStack Query.",
      img: "/product.png",
      link: "https://react-crud-liart-sigma.vercel.app/#home",
    },
    {
      id: 13,
      category: "React",
      title: "Computer Center",
      description: "A responsive webpage for a computer center, built using React and Tailwind CSS.",
      img: "/tailwind.png",
      link: "https://react-tailwind-nine-kappa.vercel.app/",
    },
    {
      id: 14,
      category: "MERN",
      title: "Employee Managment System",
      description: "Make a employee managment system by using MERN",
      img: "/employee.png",
      link: "https://employee-managment-system-mern.vercel.app",
    },
    {
      id: 15,
      category: "MERN",
      title: "Task Tracker",
      description: "Make a task tracker using MERN",
      img: "/task.png",
      link: "https://mern-hackathone.vercel.app",
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
      <div className="d-flex flex-wrap justify-content-center gap-2mt-3 mb-3">
        <button className="btn-custom  w-auto w-md-50 w-sm-75" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="btn-custom  w-auto w-md-50 w-sm-75" onClick={() => setFilter("HTML & CSS")}>
          HTML & CSS
        </button>
        <button className="btn-custom  w-auto w-md-50 w-sm-75" onClick={() => setFilter("JavaScript")}>
          JavaScript
        </button>
        <button className="btn-custom  w-auto w-md-50 w-sm-75" onClick={() => setFilter("React")}>
          React
        </button>
        <button className="btn-custom  w-auto w-md-50 w-sm-75" onClick={() => setFilter("FireBase")}>
          FireBase
        </button>
        <button className="btn-custom  w-auto w-md-50 w-sm-75" onClick={() => setFilter("MERN")}>
          MERN
        </button>
      </div>

      <div className="row mt-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="col-lg-3 col-sm-6 animate__animated animate__backInLeft"
          >
            <Card className="me-3 custom-card mt-3">
              <Card.Img
                variant="top"
                src={project.img}
                className="card-image mt-2 p-1"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="live-link"
                   mt-5
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
