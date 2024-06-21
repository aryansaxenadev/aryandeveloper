// src/components/Skills.js
import React, { useEffect, useRef } from 'react';
import './Skills.css';
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

const skillsData = [
  {
    category: 'Front-End',
    icon: fron,
    skills: [
      { name: 'HTML5', icon: html },
      { name: 'CSS3', icon: css },
      { name: 'JavaScript', icon: javascript },
      { name: 'TypeScript', icon: typescript },
      { name: 'React', icon: react },
      { name: 'Redux', icon: redux },
      { name: 'Vue.js', icon: vue },
      { name: 'Next.js', icon: next },
      { name: 'Bootstrap', icon: boostrap },
      { name: 'Material Design', icon: materialui },
      { name: 'Tailwind.css', icon: tail }
    ]
  },
  {
    category: 'Back-End',
    icon: back,
    skills: [
      { name: 'Node.js', icon: python },
      { name: 'Express', icon: django },
      { name: 'MySQL', icon: flask },
      { name: 'Sequelize', icon: node },
      { name: 'MongoDB', icon: express },
      { name: 'Mongoose', icon: mongodb },
      { name: 'GraphQL', icon: mongoose },
      { name: 'Apollo GraphQL', icon: mysql },
      { name: 'Python', icon: postgre },
      { name: 'Spring Boot', icon: sqlalchemy },
      { name: 'Spring Security', icon: next },
      { name: 'Spring Security', icon: redis }
    ]
  },
  {
    category: 'Tools',
    icon: tools,
    skills: [
      { name: 'Git', icon: vscode },
      { name: 'GitHub', icon: git },
      { name: 'Heroku', icon: github },
      { name: 'Netlify', icon: postman },
      { name: 'Visual Studio Code', icon: stack },
      { name: 'Postman', icon: jira },
      { name: 'Webpack', icon: npm },
      { name: 'Jest', icon: pytest },
      { name: 'IntelliJ IDEA', icon: render },
      { name: 'Render', icon: netlify },
      { name: 'AWS', icon: aws },
      { name: 'Docker', icon: docker },
      { name: 'WordPress', icon: word }
    ]
  }
];

const Skills = () => {
  const skillsRef = useRef(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="skills" ref={skillsRef}>
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <img src={category.icon} alt={`${category.category} Icon`} className="skills-icon" />
            <h3>{category.category}</h3>
            <hr />
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <img 
                  key={idx} 
                  src={skill.icon} 
                  alt={skill.name} 
                  title={skill.name} 
                  className="skill-image" 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
