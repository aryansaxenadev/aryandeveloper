// src/components/About.js
import React, { useEffect, useRef } from 'react';
import './About.css'; // New CSS file for the About section
import study from '../study.png'; // Adjust the path to your image

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <h2 className="about-heading">About Me</h2>
      <div className="about-content-wrapper">
        <div className="about-image-container">
          <img src={study} alt="Aryan" className="about-profile-pic" />
        </div>
        <div className="about-content">
          <p>
          Hi, I'm Aryan, a 15-year-old high school student and full-stack developer from India. I specialize in Python, JavaScript, and frameworks like Django, Flask, React, React Native, Vue, Node.js, Express.js, and Next.js. My skills include SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase, Redis) databases. Starting as a freelancer, I've tackled diverse projects that sharpened my problem-solving skills and attention to detail. Passionate about technology, I stay updated with industry trends and best practices.
          </p>
          <p>
          I enjoy tackling challenging projects that push my creativity and technical expertise. My aim is to deliver high-quality, innovative solutions that empower businesses and turn ideas into impactful realities. Through my work, I aspire to make a significant impact in the tech world by bringing innovative ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
