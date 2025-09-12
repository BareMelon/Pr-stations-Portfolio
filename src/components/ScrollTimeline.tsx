import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../config/projects';

const ScrollTimeline: React.FC = () => {
  return (
    <div className="simple-timeline">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="simple-project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="project-header">
            <div className="project-number">#{index + 1}</div>
            <span className="project-date">{project.date}</span>
          </div>
          
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-tech">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          
                          {project.link && (
                  <motion.a 
                    href={project.link}
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Se Projekt →
                  </motion.a>
                )}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollTimeline;