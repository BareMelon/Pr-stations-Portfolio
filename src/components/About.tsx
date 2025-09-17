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
            {/* Profile image */}
            <img 
              src="/profileimage.jpg" 
              alt="Gustav Fyhn - Profile Picture" 
              className="profile-image"
              width="300"
              height="300"
            />
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