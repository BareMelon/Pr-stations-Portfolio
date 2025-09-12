import React from 'react';
import { projects } from '../config/projects';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2>Project Timeline</h2>
        <div className="timeline">
          {projects.map((project, index) => (
            <div key={project.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-date">{project.date}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;