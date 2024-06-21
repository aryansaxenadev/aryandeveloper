import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Import your CSS file

const ContactForm = ({ isFormVisible, toggleFormVisibility, chatIcon, closeIcon }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await axios.post(`https://portfoliosjlsa.pythonanywhere.com/api/contact/`, formDataToSend);
      console.log(response.data); // Log the response from the backend
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="chat-button" onClick={toggleFormVisibility}>
        <img src={isFormVisible ? closeIcon : chatIcon} alt="Chat" />
      </div>

      <div className={`contact-form ${isFormVisible ? 'show' : ''}`}>
        <div className="tail"></div>
        <div className="form-header">
          <h2>Contact Me</h2>
          <span className="close-button" onClick={toggleFormVisibility}>&times;</span>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email ID" required />

          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Valuable Message!" required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;