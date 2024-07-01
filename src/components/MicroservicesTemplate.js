import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from 'react-share';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './FastAPITemplate.css'; // Import CSS file for styling

const image1 = require('../image1.png');
const image2 = require('../image2.png');
const image3 = require('../image3.png');
const image4 = require('../image4.png');

const MicroservicesTemplate = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href; // Get current URL

  // Function to copy URL to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  const codeExamples = {
    definingServices: `
# Example of Defining Services in Microservices Architecture
from flask import Flask

app = Flask(__name__)

@app.route('/user')
def user_service():
    return "User Service"

@app.route('/order')
def order_service():
    return "Order Service"

if __name__ == "__main__":
    app.run(debug=True)
    `,
    restApi: `
# Example of RESTful API in Microservices
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/v1/users', methods=['GET'])
def get_users():
    users = [{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]
    return jsonify(users)

if __name__ == "__main__":
    app.run(debug=True)
    `,
    dockerfile: `
# Example Dockerfile for a Microservice
FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD ["python3", "app.py"]
    `,
    kubernetes: `
# Example Kubernetes Deployment for a Microservice
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: user-service:latest
        ports:
        - containerPort: 5000
    `
  };

  return (
    <div className="microservices-blog">
      
      {/* Introduction */}
      <h2 className="subsection-title">Introduction</h2>
      <p>In the evolving landscape of software development, scalability has become a crucial aspect of building robust applications. Microservices architecture, a method of developing software systems, has emerged as a key solution to address the challenges of scalability. This approach involves breaking down a large application into smaller, manageable, and independent services, each responsible for a specific functionality. In this blog, we will explore the principles of microservices architecture, its benefits, and practical steps to build scalable applications using this approach.</p>
      <img src={image1} alt="Microservices Overview" className="blog-image"/>

      {/* What are Microservices? */}
      <h2 className="subsection-title">What are Microservices?</h2>
      <p>Microservices, also known as the microservices architecture, is an architectural style that structures an application as a collection of loosely coupled services. Each service:</p>
      <ul>
        <li><strong>Is independently deployable:</strong> You can deploy each service without impacting the entire system.</li>
        <li><strong>Is organized around business capabilities:</strong> Services are designed to handle specific business functions.</li>
        <li><strong>Communicates through well-defined APIs:</strong> Interaction between services happens via APIs, often using HTTP/REST or messaging queues.</li>
      </ul>
      <p>This architectural style promotes the separation of concerns, allowing teams to develop, deploy, and scale services independently. By breaking down monolithic applications into smaller services, organizations can achieve greater agility and resilience.</p>
      <img src={image2} alt="Microservices Structure" className="blog-image"/>

      {/* Benefits of Microservices Architecture */}
      <h2 className="subsection-title">Benefits of Microservices Architecture</h2>
      <p>Microservices architecture offers several advantages over traditional monolithic architectures:</p>
      <ul>
        <li><strong>Scalability:</strong> Services can be scaled independently based on demand, allowing efficient use of resources.</li>
        <li><strong>Flexibility:</strong> Each service can be developed using different programming languages and technologies, enabling teams to choose the best tools for each component.</li>
        <li><strong>Resilience:</strong> Failure of one service does not necessarily impact the entire system, as other services can continue to function independently.</li>
        <li><strong>Faster Deployment:</strong> Smaller, independent services can be deployed more quickly and frequently, facilitating faster iteration and time-to-market.</li>
        <li><strong>Improved Maintenance:</strong> Updates and maintenance can be applied to individual services without disrupting the entire application, reducing risks associated with changes.</li>
      </ul>
      <p>These benefits make microservices architecture particularly suitable for large, complex applications and environments where scalability and agility are critical.</p>
      <img src={image3} alt="Benefits of Microservices" className="blog-image"/>

      {/* Key Principles of Microservices Architecture */}
      <h2 className="subsection-title">Key Principles of Microservices Architecture</h2>
      <p>Effective implementation of microservices architecture is guided by several key principles:</p>
      <ul>
        <li><strong>Single Responsibility Principle (SRP):</strong> Each service should have a single responsibility or function, ensuring clarity and maintainability.</li>
        <li><strong>Decentralized Data Management:</strong> Each microservice should manage its own database, avoiding dependencies and reducing the risk of a single point of failure.</li>
        <li><strong>API-First Design:</strong> Services communicate through well-defined APIs, promoting interoperability and ease of integration.</li>
        <li><strong>Continuous Delivery:</strong> Automation of deployment, testing, and monitoring processes enables rapid and reliable delivery of updates.</li>
      </ul>
      <p>These principles help teams design scalable, resilient, and maintainable microservices architectures that can adapt to changing business requirements and technological advancements.</p>

      {/* Steps to Build a Scalable Application with Microservices */}
      <h2 className="subsection-title">Steps to Build a Scalable Application with Microservices</h2>
      
      {/* Step 1: Define Your Services */}
      <h3>1. Define Your Services</h3>
      <p>The first step in adopting microservices architecture is to identify and define the boundaries of each service based on business capabilities. Services should be designed with clear responsibilities and well-defined interfaces.</p>
      <p>For example, in an e-commerce application, services could include user management, product catalog, order processing, payment handling, and notification services.</p>
      <pre>
        <code className="code-block">
          {codeExamples.definingServices}
        </code>
        <button
          className="copy-button"
          onClick={() => copyToClipboard(codeExamples.definingServices)}
        >
          {copied ? 'Copied!' : 'Copy Code'}
          <FiCopy className="copy-icon" />
        </button>
      </pre>

      {/* Step 2: Choose the Right Technology Stack */}
      <h3>2. Choose the Right Technology Stack</h3>
      <p>Selecting the appropriate technology stack for each microservice is crucial for performance, scalability, and maintainability. Consider factors such as programming languages, frameworks, and databases that align with the specific requirements of each service.</p>
      <p>For instance, use Node.js with Express for lightweight, high-performance services, or Python with Flask for rapid development and ease of integration.</p>

      {/* Step 3: Implement Inter-Service Communication */}
      <h3>3. Implement Inter-Service Communication</h3>
      <p>Effective communication between microservices is essential for maintaining consistency and coordination across the system. Use RESTful APIs for synchronous communication and message queues (e.g., RabbitMQ, Kafka) for asynchronous communication to decouple services and improve scalability.</p>
      <pre>
        <code className="code-block">
          {codeExamples.restApi}
        </code>
        <button
          className="copy-button"
          onClick={() => copyToClipboard(codeExamples.restApi)}
        >
          {copied ? 'Copied!' : 'Copy Code'}
          <FiCopy className="copy-icon" />
        </button>
      </pre>

      {/* Step 4: Set Up Infrastructure */}
      <h3>4. Set Up Infrastructure</h3>
      <p>Infrastructure automation plays a crucial role in managing and scaling microservices applications effectively. Use containerization tools like Docker to package each service with its dependencies, ensuring consistency across development, testing, and production environments.</p>
      <pre>
        <code className="code-block">
          {codeExamples.dockerfile}
        </code>
        <button
          className="copy-button"
          onClick={() => copyToClipboard(codeExamples.dockerfile)}
        >
          {copied ? 'Copied!' : 'Copy Code'}
          <FiCopy className="copy-icon" />
        </button>
      </pre>
      <img src={image3} alt="Infrastructure Setup" className="blog-image"/>

      {/* Step 5: Ensure Monitoring and Logging */}
      <h3>5. Ensure Monitoring and Logging</h3>
      <p>Monitoring the health and performance of microservices is essential for identifying and resolving issues proactively. Implement monitoring tools like Prometheus and Grafana to track metrics and visualize performance indicators across services. Centralized logging with tools like the ELK stack (Elasticsearch, Logstash, Kibana) enables efficient troubleshooting and auditing.</p>
      <img src={image4} alt="Monitoring and Logging" className="blog-image"/>

      {/* Step 6: Implement Security Best Practices */}
      <h3>6. Implement Security Best Practices</h3>
      <p>Security is a critical consideration in microservices architecture, given the distributed nature of services and their interactions. Adopt security measures such as OAuth for API authentication and authorization, JWT (JSON Web Tokens) for secure data transmission, and encryption mechanisms for protecting sensitive information.</p>

      {/* Conclusion */}
      <h2 className="subsection-title">Conclusion</h2>
      <p>Microservices architecture offers a scalable, resilient, and flexible approach to building modern applications. By breaking down monolithic applications into smaller, independently deployable services, organizations can achieve greater agility, scalability, and efficiency in software development and deployment.</p>
      <p>However, adopting microservices requires careful planning, architectural design, and implementation to fully realize its benefits. Organizations must consider factors such as service boundaries, technology stack selection, communication patterns, infrastructure automation, monitoring, and security to successfully implement and maintain microservices-based applications.</p>

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

export default MicroservicesTemplate;
