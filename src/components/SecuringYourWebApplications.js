// SecuringYourWebApplications.js

import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from 'react-share';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './FastAPITemplate.css'; // Import CSS file for styling
import authImage from '../auth.png'; // Authentication image
import encryptImage from '../encry.jpg'; // Encryption image
import inputValidationImage from '../form.png'; // Input validation image
import apiSecurityImage from '../apisequir.png'; // API security image

const SecuringYourWebApplications = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href; // Get current URL

  // Function to copy URL to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <div>
      <h1 className="section-title">Overview:</h1>
      <p className="section-introduction">
        In today's digital landscape, web application security is of utmost importance. With the increasing number of cyber threats, ensuring the security of your web applications is essential to protect sensitive data and maintain user trust. This guide will walk you through the key aspects of securing your web applications.
      </p>

      <h2 className="subsection-title">1. Authentication and Authorization</h2>
      <img src={authImage} alt="Authentication" className="section-image" />
      <p className="section-text">
        Proper authentication and authorization mechanisms are critical to ensure that only authorized users can access your web application and its resources.
      </p>
      <h3 className="subsubsection-title">Implementing Secure Authentication</h3>
      <p className="section-text">
        Secure authentication methods such as multi-factor authentication (MFA) and strong password policies help in preventing unauthorized access.
      </p>
      <div className="code-container">
        <div className="code-header">
          <h4 className="subsection-title">Example Code</h4>
          <button className="copy-button" onClick={() => copyToClipboard(`
import hashlib
import os

def hash_password(password):
    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)
    return salt + key
          `)}>
            {copied ? 'Copied!' : 'Copy Code'}
            <FiCopy className="copy-icon" />
          </button>
        </div>
        <pre className="code-block">
          <code>
{`
import hashlib
import os

def hash_password(password):
    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)
    return salt + key
`}
          </code>
        </pre>
      </div>

      <h3 className="subsubsection-title">Role-Based Access Control (RBAC)</h3>
      <p className="section-text">
        Role-Based Access Control (RBAC) ensures that users have access only to the resources necessary for their role. Implementing RBAC can prevent unauthorized access to sensitive data.
      </p>
      <div className="code-container">
        <div className="code-header">
          <h4 className="subsection-title">Example Code</h4>
          <button className="copy-button" onClick={() => copyToClipboard(`
class User:
    def __init__(self, username, role):
        self.username = username
        self.role = role

class AccessControl:
    def __init__(self):
        self.roles_permissions = {
            'admin': ['add_user', 'delete_user', 'view_data'],
            'user': ['view_data']
        }

    def check_permission(self, user, permission):
        return permission in self.roles_permissions.get(user.role, [])
          `)}>
            {copied ? 'Copied!' : 'Copy Code'}
            <FiCopy className="copy-icon" />
          </button>
        </div>
        <pre className="code-block">
          <code>
{`
class User:
    def __init__(self, username, role):
        self.username = username
        self.role = role

class AccessControl:
    def __init__(self):
        self.roles_permissions = {
            'admin': ['add_user', 'delete_user', 'view_data'],
            'user': ['view_data']
        }

    def check_permission(self, user, permission):
        return permission in self.roles_permissions.get(user.role, [])
`}
          </code>
        </pre>
      </div>

      <h2 className="subsection-title">2. Data Encryption</h2>
      <img src={encryptImage} alt="Encryption" className="section-image" />
      <p className="section-text">
        Encryption is crucial for protecting data both at rest and in transit. Use strong encryption protocols to ensure data security.
      </p>
      <h3 className="subsubsection-title">HTTPS and SSL/TLS</h3>
      <p className="section-text">
        Always use HTTPS to encrypt data in transit. SSL/TLS certificates provide a secure channel between the client and server.
      </p>
      <div className="code-container">
        <div className="code-header">
          <h4 className="subsection-title">Example Code</h4>
          <button className="copy-button" onClick={() => copyToClipboard(`
from flask import Flask, jsonify
import ssl

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Secure Connection Established")

if __name__ == '__main__':
    context = ssl.SSLContext(ssl.PROTOCOL_TLS)
    context.load_cert_chain('path/to/cert.pem', 'path/to/key.pem')
    app.run(ssl_context=context)
          `)}>
            {copied ? 'Copied!' : 'Copy Code'}
            <FiCopy className="copy-icon" />
          </button>
        </div>
        <pre className="code-block">
          <code>
{`
from flask import Flask, jsonify
import ssl

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Secure Connection Established")

if __name__ == '__main__':
    context = ssl.SSLContext(ssl.PROTOCOL_TLS)
    context.load_cert_chain('path/to/cert.pem', 'path/to/key.pem')
    app.run(ssl_context=context)
`}
          </code>
        </pre>
      </div>

      <h3 className="subsubsection-title">Encrypting Data at Rest</h3>
      <p className="section-text">
        Encrypt sensitive data stored in databases or file systems to prevent unauthorized access.
      </p>
      <div className="code-container">
        <div className="code-header">
          <h4 className="subsection-title">Example Code</h4>
          <button className="copy-button" onClick={() => copyToClipboard(`
from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher_suite = Fernet(key)

def encrypt_data(data):
    return cipher_suite.encrypt(data.encode())

def decrypt_data(encrypted_data):
    return cipher_suite.decrypt(encrypted_data).decode()
          `)}>
            {copied ? 'Copied!' : 'Copy Code'}
            <FiCopy className="copy-icon" />
          </button>
        </div>
        <pre className="code-block">
          <code>
{`
from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher_suite = Fernet(key)

def encrypt_data(data):
    return cipher_suite.encrypt(data.encode())

def decrypt_data(encrypted_data):
    return cipher_suite.decrypt(encrypted_data).decode()
`}
          </code>
        </pre>
      </div>

      <h3 className="subsubsection-title">Encrypting Data in Transit</h3>
      <p className="section-text">
        Ensure all data transmitted between client and server is encrypted using protocols like HTTPS and TLS.
      </p>

      <h2 className="subsection-title">3. Input Validation and Sanitization</h2>
      <img src={inputValidationImage} alt="Input Validation" className="section-image" />
      <p className="section-text">
        Input validation and sanitization are crucial to prevent common vulnerabilities such as SQL injection and Cross-Site Scripting (XSS).
      </p>
      <h3 className="subsubsection-title">Importance of Input Validation</h3>
      <p className="section-text">
        Validating user inputs ensures that only correctly formatted data enters the system, reducing the risk of malicious data causing harm.
      </p>
      <div className="code-container">
        <div className="code-header">
          <h4 className="subsection-title">Example Code</h4>
          <button className="copy-button" onClick={() => copyToClipboard(`
from flask import Flask, request, jsonify
import re

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    if 'email' in data and re.match(r'^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$', data['email']):
        return jsonify(message="Valid email")
    return jsonify(message="Invalid email"), 400
          `)}>
            {copied ? 'Copied!' : 'Copy Code'}
            <FiCopy className="copy-icon" />
          </button>
        </div>
        <pre className="code-block">
          <code>
{`
from flask import Flask, request, jsonify
import re

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    if 'email' in data and re.match(r'^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$', data['email']):
        return jsonify(message="Valid email")
    return jsonify(message="Invalid email"), 400
`}
          </code>
        </pre>
      </div>

      <h3 className="subsubsection-title">Sanitizing Inputs</h3>
      <p className="section-text">
        Sanitize inputs to remove potentially dangerous characters or patterns, thus preventing injection attacks.
      </p>
      <div className="code-container">
        <div className="code-header">
          <h4 className="subsection-title">Example Code</h4>
          <button className="copy-button" onClick={() => copyToClipboard(`
from bleach import clean

def sanitize_input(user_input):
    return clean(user_input)
          `)}>
            {copied ? 'Copied!' : 'Copy Code'}
            <FiCopy className="copy-icon" />
          </button>
        </div>
        <pre className="code-block">
          <code>
{`
from bleach import clean

def sanitize_input(user_input):
    return clean(user_input)
`}
          </code>
        </pre>
      </div>

      <h2 className="subsection-title">4. Secure API Development</h2>
      <img src={apiSecurityImage} alt="API Security" className="section-image" />
      <p className="section-text">
        Secure API development is vital to protect backend services and data from unauthorized access and attacks.
      </p>
      <h3 className="subsubsection-title">API Authentication and Authorization</h3>
      <p className="section-text">
        Implement API authentication using tokens, OAuth, or API keys to ensure only authorized clients can access your API.
      </p>
      <div className="code-container">
        <div className="code-header">
          <h4 className="subsection-title">Example Code</h4>
          <button className="copy-button" onClick={() => copyToClipboard(`
from flask import Flask, request, jsonify

app = Flask(__name__)

API_KEY = 'your_api_key'

@app.route('/data', methods=['GET'])
def get_data():
    api_key = request.headers.get('x-api-key')
    if api_key == API_KEY:
        return jsonify(data="Secure Data")
    return jsonify(message="Unauthorized"), 401
          `)}>
            {copied ? 'Copied!' : 'Copy Code'}
            <FiCopy className="copy-icon" />
          </button>
        </div>
        <pre className="code-block">
          <code>
{`
from flask import Flask, request, jsonify

app = Flask(__name__)

API_KEY = 'your_api_key'

@app.route('/data', methods=['GET'])
def get_data():
    api_key = request.headers.get('x-api-key')
    if api_key == API_KEY:
        return jsonify(data="Secure Data")
    return jsonify(message="Unauthorized"), 401
`}
          </code>
        </pre>
      </div>

      <h3 className="subsubsection-title">Rate Limiting</h3>
      <p className="section-text">
        Implement rate limiting to prevent abuse of your API and ensure it can handle legitimate traffic without being overwhelmed.
      </p>
      <div className="code-container">
        <div className="code-header">
          <h4 className="subsection-title">Example Code</h4>
          <button className="copy-button" onClick={() => copyToClipboard(`
from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"]
)

@app.route('/data')
@limiter.limit("10 per minute")
def get_data():
    return jsonify(data="Secure Data")
          `)}>
            {copied ? 'Copied!' : 'Copy Code'}
            <FiCopy className="copy-icon" />
          </button>
        </div>
        <pre className="code-block">
          <code>
{`
from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"]
)

@app.route('/data')
@limiter.limit("10 per minute")
def get_data():
    return jsonify(data="Secure Data")
`}
          </code>
        </pre>
      </div>

      <h2 className="subsection-title">5. Regular Security Audits and Updates</h2>
      <p className="section-text">
        Regular security audits and updates are essential to identify and address vulnerabilities in your web application.
      </p>
      <h3 className="subsubsection-title">Conducting Security Audits</h3>
      <p className="section-text">
        Regular security audits help identify potential vulnerabilities and ensure that security measures are up-to-date.
      </p>

      <h3 className="subsubsection-title">Staying Up-to-Date with Security Patches</h3>
      <p className="section-text">
        Ensure your software and dependencies are updated with the latest security patches to protect against known vulnerabilities.
      </p>

      {/* Share Buttons */}
      <h2 className="subsection-title">Share this blog</h2>
      <div className="share-buttons">
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={currentUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton url={currentUrl}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <button
          className="copy-button"
          onClick={() => copyToClipboard(currentUrl)}
          data-tip
          data-for="copyTooltip"
        >
          {copied ? 'Copied!' : 'Copy Link'}
          <FiCopy className="copy-icon" />
        </button>
        <ReactTooltip id="copyTooltip" place="top" effect="solid" getContent={() => currentUrl} />
      </div>
    </div>
  );
};

export default SecuringYourWebApplications;
