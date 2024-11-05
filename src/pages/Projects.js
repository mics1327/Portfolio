// Projects.js
import React from 'react';
import './Projects.css'; // Import CSS file for styling

const projectsData = [
  {
    title: "Project One",
    description: "A web application designed to streamline task management.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project-one"
  },
  {
    title: "Project Two",
    description: "An e-commerce platform that provides a seamless shopping experience.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project-two"
  },
  {
    title: "Project Three",
    description: "A mobile app that helps users stay organized and productive.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project-three"
  }
  // Add more projects as needed
];

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
