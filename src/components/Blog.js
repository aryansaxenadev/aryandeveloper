import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // Import the CSS file
import fast from '../fastapi.jfif';
import demon from '../demon.jfif';
import aot from '../aot.jpg';
import micro from '../micro.jpeg'
import optimization from '../optimization.png';
import blog4 from '../blog4.jfif';
import blog5 from '../blog5.avif';
const blogPosts = [
  {
    id: 1,
    title: "Mastering FastAPI: The Ultimate Guide for Fast Web Development",
    category: "Web Development",
    summary: "Mastering FastAPI: The Ultimate Guide for Fast Web Development explores FastAPI's features and benefits, providing tutorials and advanced techniques to help developers build efficient web applications swiftly.",
    image: fast // Replace './path/to/naruto.jpg' with the actual path to your image
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices Architecture",
    category: "Technology",
    summary: "Microservices architecture divides applications into independent services communicating via APIs, enhancing scalability, flexibility, and facilitating streamlined development processes.",
    image: micro
  },
  {
    id: 3,
    title: "Optimizing Web Performance: Best Practices and Techniques",
    category: "Web Development",
    summary: "Discover essential best practices and advanced techniques for optimizing web performance, ensuring faster load times, improved user engagement, and enhanced SEO.",
    image: optimization
  },
  {
    id: 4,
    title: "CI/CD Pipelines: Automating Your Development Workflow",
    category: "Technology",
    summary: "Explore the transformative power of CI/CD pipelines in software development, leveraging automation for faster releases, enhanced quality control, and seamless team collaboration.",
    image: blog4
  },
  {
    id: 5,
    title: "Securing Your Web Applications: A Comprehensive Guide",
    category: "Web Development",
    summary: "Explore the transformative power of CI/CD pipelines in software development, leveraging automation for faster releases, enhanced quality control, and seamless team collaboration.",
    image: blog5
  },
  // Add more blog posts as needed
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-container">
      <h1>Blog Page</h1>
      <div className="content">
        <div className="blog-posts">
          <div className="blog-grid">
            {filteredPosts.map(post => (
              <div key={post.id} className="blog-post">
                <img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
                <Link to={`/blog/${post.id}`}>Read More</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="search-sidebar">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Filter Blogs by their title..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
          <div className="categories">
            <h2>Categories</h2>
            <button onClick={() => setSelectedCategory('All')}>All</button>
            <button onClick={() => setSelectedCategory('Technology')}>Technology</button>
            <button onClick={() => setSelectedCategory('Web Development')}>Web Development</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
