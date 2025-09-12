import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Om Mig</h2>
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* SVG Placeholder for billede */}
            <svg 
              className="profile-placeholder" 
              width="300" 
              height="300" 
              viewBox="0 0 300 300" 
              fill="none"
            >
              <rect width="300" height="300" rx="20" fill="#333333" stroke="#00ff41" strokeWidth="2"/>
              <circle cx="150" cy="120" r="40" fill="#00ff41" opacity="0.3"/>
              <path d="M100 200 Q150 160 200 200 L200 260 Q150 280 100 260 Z" fill="#00ff41" opacity="0.3"/>
              <text x="150" y="280" textAnchor="middle" fill="#00ff41" fontSize="12" fontFamily="Arial">
                Billede kommer her
              </text>
            </svg>
          </motion.div>
          <div className="about-text">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mit navn er Gustav Fyhn, jeg er 16 år gammel og studerer på Hansenberg erhvervsskole.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Her viser jeg mit GF 1 (Media og digital kommunikation) arbejde, hvor jeg har udviklet 
              mine færdigheder.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Jeg håber, at du kan se min udvikling og entusiasme for det digitale medieunivers!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;