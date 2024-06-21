// src/components/Projects.js
import React from 'react';
import './Projects.css';
import project1 from '../project1.jpeg';
import project2 from '../project2.jpeg';
import project3 from '../project3.jpeg';
import project4 from '../project4.png';
import project5 from '../project5.png';
import html from '../html.png';
import css from '../css.png';
import react from '../react.png';
import redux from '../redux.png';
import javascript from '../javascript.png';
import typescript from '../typescript.png';
import next from '../nextjs.png';
import vue from '../vue.jpg';
import boostrap from '../bootstrap.png';
import tail from '../tailwindcss.png';
import materialui from '../materialui.png';
import node from '../node.png';
import express from '../express.png';
import python from '../python.png';
import django from '../django.png';
import flask from '../flask.jpg';
import mongodb from '../mongodb.png';
import mongoose from '../mongoose.png';
import mysql from '../mysql.jpg';
import postgre from '../postgre.jpg';
import sqlalchemy from '../sqlalchemy.jpg';
import word from '../wordpress.jpg';
import postman from '../postman.png';
import vscode from '../vscode.png';
import pytest from '../pytest.png';
import npm from '../npm.png';
import redis from '../redis.jpg';
import jira from '../jira.png';
import git from '../git.png';
import github from '../github.png';
import stack from '../stack.png';
import render from '../render.png';
import netlify from '../netlify.webp';
import aws from '../aws.png';
import fron from '../frontend.png';
import back from '../backend.png';
import tools from '../tools.png';
import docker from '../docker.png';
import chart from '../chart.jfif';
import stripe from '../stripe.png';
import pay from '../pay.png';
import rest from '../rest.png';
import prisma from '../prisma.jpg.jpg';

const projectsData = [
  {
    image: project1,
    name: 'ELearners',
    type: 'E-Learning(Data Visualization)',
    description: 'E-Learning Platform Overview This project is an E-Learning platform. The platform allows users to register, log in, enroll in courses, view course materials, and track their progress. It also provides an admin panel for managing courses, users, and content with subcription and nonsubcription users.',
    technologies: [
      { name: 'Next.js', icon: react },
      { name: 'React', icon: redux },
      { name: 'Tailwind CSS', icon: typescript },
      { name: 'JavaScript', icon: tail },
      { name: 'Java', icon: boostrap },
      { name: 'MySQL', icon: node },
      { name: 'Spring Boot', icon: express },
      { name: 'Heroku', icon: mongodb },
      { name: 'Netlify', icon: mongoose },
      { name: 'Vercel', icon: stripe },
      { name: 'AWS', icon: chart },
      { name: 'Stripe', icon: aws },
      { name: 'Stripe', icon: docker },
      { name: 'Stripe', icon: netlify }
    ],
    liveDemo: 'https://tech-elearners.netlify.app',
    sourceCode: 'https://github.com/aryansaxenadev/E-Learning-Data-Visualization'
  },
  {
    image: project2,
    name: 'UdayStore',
    type: 'E-Commerce Platform',
    description: 'Integrate PayPal into a Django and React e-commerce platform for secure payments, seamless transaction handling, and optional refunds. Features include user feedback on payment status and robust error handling. Tech stack: Django, PayPal SDK, Django REST Framework, and PostgreSQL.',
    technologies: [
      { name: 'Next.js', icon: react },
      { name: 'React', icon: redux },
      { name: 'Tailwind CSS', icon: materialui },
      { name: 'JavaScript', icon: boostrap },
      { name: 'Java', icon: python },
      { name: 'Vercel', icon: django },
      { name: 'AWS', icon: rest },
      { name: 'Stripe', icon: pay },
      { name: 'Netlify', icon: aws },
      { name: 'Netlify', icon: docker },
      { name: 'Netlify', icon: netlify }
    ],
    liveDemo: 'https://github.com/aryansaxenadev/E-Commerce/blob/main/README.md',
    sourceCode: 'https://github.com/aryansaxenadev/E-Commerce'
  },
  {
    image: project3,
    name: 'JobSeaker',
    type: 'Job Seaking Platform',
    description: 'A comprehensive job-seeking platform. Features include secure authentication, job listings, advanced search, resume builder, employer dashboard, and detailed profiles. Tech stack: Node.js, Express, React, Redux, MongoDB, JWT and Docker.',
    technologies: [
      { name: 'Next.js', icon: vue },
      { name: 'React', icon: redux },
      { name: 'Tailwind CSS', icon: boostrap },
      { name: 'JavaScript', icon: materialui },
      { name: 'Java', icon: node },
      { name: 'MySQL', icon: express },
      { name: 'Heroku', icon: tail },
      { name: 'Netlify', icon: netlify },
      { name: 'AWS', icon: aws },
      { name: 'Stripe', icon: docker }
    ],
    liveDemo: 'https://github.com/aryansaxenadev/Job_Board/blob/main/README.md',
    sourceCode: 'https://github.com/aryansaxenadev/Job_Board'
  },
  {
    image: project4,
    name: 'Social Network',
    type: 'Dynamic Social Media',
    description: 'A dynamic social media app with a Django backend featuring user authentication, CRUD posts, likes, comments, and follow/unfollow functionality. Tech stack includes Django, Django REST Framework, PostgreSQL, JWT, Docker, Nginx, and Gunicorn.',
    technologies: [
      { name: 'Next.js', icon: html },
      { name: 'React', icon: css },
      { name: 'React', icon: javascript },
      { name: 'Tailwind CSS', icon: boostrap },
      { name: 'JavaScript', icon: python },
      { name: 'Java', icon: django },
      { name: 'Spring Boot', icon: aws },
      { name: 'Heroku', icon: docker }
    ],
    liveDemo: 'http://network33.pythonanywhere.com',
    sourceCode: 'https://github.com/yourusername/nextil'
  },
  {
    image: project5,
    name: 'AI Forge',
    type: 'Ai Powered SaaS Application',
    description: 'AI Forge is a revolutionary SaaS platform offering advanced AI generative tools. Features include code, conversation, image, video, and audio generation. Benefits: enhanced productivity, creative exploration, scalable solutions, and competitive edge. Sign up for a free trial today to unlock the future of digital creativity!',
    technologies: [
      { name: 'Next.js', icon: next },
      { name: 'React', icon: react },
      { name: 'Tailwind CSS', icon: tail },
      { name: 'JavaScript', icon: prisma },
      { name: 'Java', icon: mongodb },
      { name: 'MySQL', icon: stripe }
    ],
    sourceCode: 'https://github.com/aryansaxenadev/AiBased-SaaSproject-nextjs'
  }
  // Add other projects similarly
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.name} image`} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <h4 className="project-type">{project.type}</h4>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              <div className="project-tech-header">Technologies</div>
              {project.technologies.map((tech, idx) => (
                <img 
                  key={idx} 
                  src={tech.icon} 
                  alt={tech.name} 
                  title={tech.name} 
                  className="project-tech-image" 
                />
              ))}
            </div>
            <div className="project-buttons">
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-button demo-button">Live Demo</a>
              )}
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="project-button">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
