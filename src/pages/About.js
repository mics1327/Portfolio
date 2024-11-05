import React from "react";
import './About.css';

export const About = () => {
    return (
        <section id="about" className="about">
          <div className="about-container">
            {/* About Heading */}
            <h2>About Me</h2>
    
            {/* Short Bio */}
            <p className="about-text">
              Hello! I’m Micah, a passionate UX/UI designer and front-end developer with a love for crafting 
              intuitive and user-centered experiences. With a background in design and coding, I bring a unique 
              blend of creativity and technical skills to every project. My mission is to make digital interfaces 
              not only functional but also visually engaging.
            </p>
    
            {/* Skills */}
            <div className="skills-summary">
              <h3>Core Skills</h3>
              <ul className="skills-list">
                <li>UI/UX Design</li>
                <li>Prototyping & Wireframing</li>
                <li>Front-End Development</li>
                <li>Responsive Design</li>
                <li>JavaScript & React</li>
              </ul>
            </div>
    
            {/* Personal Highlights */}
            <div className="highlights">
              <h3>Highlights</h3>
              <ul className="highlights-list">
                <li>🌟 Over 5 years of experience in the design industry</li>
                <li>🌟 Successfully launched 20+ projects</li>
                <li>🌟 Specialized in creating seamless user experiences</li>
              </ul>
            </div>
          </div>
        </section>
      );
};