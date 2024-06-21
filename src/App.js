import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/Contact';
import Divider from './components/Divider';
import { Element } from 'react-scroll';
import LoadingSpinner from './components/Loading';
import ContactForm from './components/ContactForm';
import chatIcon from './chat.png'; // Add correct path for chat icon
import closeIcon from './close-icon.png'; // Add correct path for close icon
import ElevateYourWebPresent from './components/ElevateYourWebPresent';

function App() {
  const [loading, setLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 780));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <Navbar />
          <ContactForm 
            isFormVisible={isFormVisible} 
            toggleFormVisibility={toggleFormVisibility} 
            chatIcon={chatIcon} 
            closeIcon={closeIcon} 
          />
          <Element name="/">
            <Home toggleFormVisibility={toggleFormVisibility} />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="divider">
            <Divider />
          </Element>
          <Element name="projects">
            <Projects />
            <Divider />
          </Element>
          <ElevateYourWebPresent />
          <Element name="contact">
            <ContactMe />
          </Element>
        </>
      )}
    </div>
  );
}

export default App;
