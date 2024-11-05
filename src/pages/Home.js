import React from 'react';
import './Home.css';
import { GradPic } from '../assets/images';

export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">

        <img src={GradPic} alt="Graduation Picture" className="rounded-image" />
        {/* Headlsine */}
        <h1 className="headline">Hi, I'm Micah! <br /> Front-end developer</h1>

        {/* Introduction */}
        <p className="intro">
          I’m passionate about crafting intuitive and user-centered digital experiences. 
          With a background in design and front-end development, I strive to bring impactful 
          ideas to life.
        </p>

        {/* Skills Section */}
        <div className="skills">
          <h3>Core Skills</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Prototyping</li>
            <li>Front-End Development</li>
          </ul>
        </div>

        {/* Featured Project */}
        <div className="featured-project">
          <h3>Featured Project</h3>
          <p>Check out my recent project, a mobile app designed to streamline task management.</p>
          <a href="/portfolio" className="cta">View Project</a>
        </div>

        {/* Call-to-Action */}
        <div className="cta-buttons">
          <a href="/portfolio" className="cta">Explore My Work</a>
          <a href="/contact" className="cta-secondary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};
