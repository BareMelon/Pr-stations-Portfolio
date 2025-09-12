import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProgrammingIntro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showScreen, setShowScreen] = useState(false);
  
  const codeLines = [
    "const portfolio = {",
    "  developer: 'Gustav Fyhn',",
    "  passion: 'At skabe fantastiske oplevelser',",
    "  skills: ['React', 'TypeScript', 'Design'],",
    "  projects: await loadProjects(),",
    "  ready: true",
    "};",
    "",
    "portfolio.init();",
    "// Velkommen til min verden..."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < codeLines.length) {
        setCurrentLine(currentLine + 1);
      } else {
        setTimeout(() => setShowScreen(true), 1000);
        // Don't auto-complete - let user scroll to continue
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [currentLine, codeLines.length]);

  return (
    <AnimatePresence>
      <motion.div 
        className="programming-intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
      >
        <div className="code-container">
          <motion.div 
            className="terminal-window"
            initial={{ scale: 2, y: 0 }}
            animate={{ 
              scale: showScreen ? 1 : 2,
              y: showScreen ? 0 : 0,
              rotateX: showScreen ? 10 : 0,
              rotateY: showScreen ? -5 : 0
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn close"></span>
                <span className="btn minimize"></span>
                <span className="btn maximize"></span>
              </div>
              <div className="terminal-title">portfolio.ts</div>
            </div>
            <div className="terminal-body">
              <div className="code-editor">
                {codeLines.slice(0, currentLine).map((line, index) => (
                  <motion.div
                    key={index}
                    className="code-line"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="line-number">{index + 1}</span>
                    <span className="code-text">{line}</span>
                  </motion.div>
                ))}
                <motion.div 
                  className="cursor"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
          
          {showScreen && (
            <motion.div 
              className="screen-frame"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <div className="screen-bezel"></div>
              <div className="screen-stand"></div>
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="intro-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showScreen ? 1 : 0, y: showScreen ? 0 : 50 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="continue-btn"
            onClick={() => onComplete()}
            initial={{ opacity: 0 }}
            animate={{ opacity: showScreen ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProgrammingIntro;