// BlogDetail.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css'; // Create and import a CSS file for BlogDetail styling
import naruto from '../naruto.jpg';
import demon from '../demon.jfif';
import aot from '../aot.jpg';
import FastAPITemplate from './blogTemplate'; // Adjust the path as per your project structure
import fast from '../fastapi.jfif';
import MicroservicesTemplate from './MicroservicesTemplate'; // Adjust the path as per your project structure
import micro from '../micro.jpeg';
import OptimizingTemplate from './OptimizingTemplate';
import optimization from '../optimization.png';
import CICDPipelineTemplate from './CICDPipelineTemplate';
import blog4 from '../blog4.jfif';
import SecuringYourWebApplications from './SecuringYourWebApplications';
import blog5 from '../blog5.avif';
const blogPosts = [
  {
    id: 1,
    title: "Mastering FastAPI: The Ultimate Guide for Fast Web Development",
    category: "Web Development",
    content: <FastAPITemplate />,
    image: fast // Update with actual image path
  },
  {
    id: 2,
    title: "Building Scalable Applications with Microservices Architecture",
    category: "Technology",
    content: <MicroservicesTemplate />,
    image: micro // Update with actual image path
  },
  {
    id: 3,
    title: "Optimizing Web Performance: Best Practices and Techniques",
    category: "Web Development",
    content: <OptimizingTemplate />,
    image: optimization // Update with actual image path
  },
  {
    id: 4,
    title: "CI/CD Pipelines: Automating Your Development Workflow",
    category: "Technology",
    content: <CICDPipelineTemplate />,
    image: blog4 // Update with actual image path
  },
  {
    id: 5,
    title: "Securing Your Web Applications: A Comprehensive Guide",
    category: "Web Development",
    content: <SecuringYourWebApplications />,
    image: blog5 // Update with actual image path
  },
  // Add more blog posts as needed
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id.toString() === id);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="blog-detail-container">
      <div className="blog-content">
      <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
        
        <p>{post.content}</p>
      </div>
      <div className="search-sidebar">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search here for other blogs by their title..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        {searchTerm && (
          <div className="search-results">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(filteredPost => (
                <div key={filteredPost.id} className="search-result-item">
                  <Link to={`/blog/${filteredPost.id}`}>
                    <img src={filteredPost.image} alt={filteredPost.title} />
                    <h3>{filteredPost.title}</h3>
                  </Link>
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
