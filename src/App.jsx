import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Interests from './components/Interests';
import BootSequence from './components/BootSequence';
import CursorGlow from './components/CursorGlow';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Hero />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'interests':
        return (
          <div className="space-y-12">
            <Interests />
          </div>
        );
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  };

  if (loading) {
    return <BootSequence onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <CursorGlow />
      <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4 }}
          >
            {activeSection === 'home' ? (
              <>
                <Hero />
                {/* On Home, maybe show a glimpse of others or just Hero? User requested "Dashboard" feel. 
                            Let's keep Home as just Hero for clean entry. */}
              </>
            ) : (
              <>
                {/* For sections like Experience, we usually group them in the menu. 
                            If activeSection is 'about', we usually show just about. 
                            However, Experience and Achievements were separate components. 
                            Let's map them logically. */}
                {renderSection()}
                {/* If activeSection is 'about', let's also show Experience/Achievements? 
                             Or maybe move Experience to its own tab? 
                             The requested menu items were: Home | About | Skills | Projects | Interests | Contact.
                             Where do Experience and Achievements go? 
                             Usually 'About' includes Experience. Let's group them.
                         */}
                {activeSection === 'about' && (
                  <div className="mt-12 space-y-20">
                    <Experience />
                    <Achievements />
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default App;
