import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import ProgrammingIntro from './components/ProgrammingIntro'
import Header from './components/Header'
import About from './components/About'
import ProjectGrid from './components/ProjectGrid'
import Contact from './components/Skills'
import Documents from './components/Documents'

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <ProgrammingIntro onComplete={handleIntroComplete} />;
  }

  return (
    <motion.div 
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <main>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <About />
        </motion.div>
        
        <section id="projects" className="projects-section">
          <div className="container">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Mine Projekter
            </motion.h2>
            <ProjectGrid />
          </div>
        </section>
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Documents />
        </motion.div>
      </main>
    </motion.div>
  )
}

export default App
