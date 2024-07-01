import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from 'react-share';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import pipelineImage from '../cicd.png';
import jenkinsImage from '../jenkin.png';
import testingImage from '../automated.png';
import deploymentImage from '../deployment.png';

const CICDPipelineTemplate = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href; // Get current URL

  const rollbackVersion = ''; // Example declaration, adjust as per your logic

  // Function to copy code examples to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <div>

      <h2 className="section-title">Introduction</h2>
      <p>
        Continuous Integration (CI) and Continuous Deployment (CD) are essential practices in modern software development. CI/CD pipelines automate the process of software delivery, allowing for faster and more reliable releases. In this blog, we will explore the fundamentals of CI/CD pipelines, their benefits, and how to implement them effectively.
      </p>

      <h2 className="section-title">What is a CI/CD Pipeline?</h2>
      <img src={pipelineImage} alt="CI/CD Pipeline" className="image" />
      <p>
        A CI/CD pipeline is a series of steps that must be performed to deliver a new version of software. These steps typically include code building, testing, and deployment. The goal of a CI/CD pipeline is to automate as much of the software delivery process as possible to ensure consistent and reliable releases.
      </p>

      <h2 className="section-title">Setting Up a CI/CD Pipeline</h2>
      <p>
        To set up a CI/CD pipeline, you need to choose the right tools and configure them according to your project requirements. Some popular CI/CD tools include Jenkins, GitLab CI, Travis CI, and CircleCI. Below is an example of setting up a CI/CD pipeline using Jenkins.
      </p>

      <h3 className="subsection-title">Step 1: Install Jenkins</h3>
      <img src={jenkinsImage} alt="Jenkins" className="image" />
      <p>
        Jenkins is an open-source automation server that supports building, deploying, and automating any project. To install Jenkins, you can use the following command:
      </p>
      <pre className="code-block">
        <code>
{`sudo apt-get update
sudo apt-get install jenkins`}
        </code>
      </pre>
      <button className="copy-button" onClick={() => copyToClipboard('sudo apt-get update\nsudo apt-get install jenkins')} data-tip data-for="copyTooltip">
        {copied ? 'Copied!' : 'Copy Command'}
        <FiCopy className="copy-icon" />
      </button>

      <h3 className="subsection-title">Step 2: Configure Jenkins</h3>
      <p>
        After installing Jenkins, you need to configure it by setting up a new job. A Jenkins job defines the steps to build, test, and deploy your application. Here is an example configuration for a Jenkins pipeline job:
      </p>
      <pre className="code-block">
        <code>
{`pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'make build'
      }
    }
    stage('Test') {
      steps {
        sh 'make test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'make deploy'
      }
    }
  }
}`}
        </code>
      </pre>
      <button className="copy-button" onClick={() => copyToClipboard(`pipeline {\n  agent any\n  stages {\n    stage('Build') {\n      steps {\n        sh 'make build'\n      }\n    }\n    stage('Test') {\n      steps {\n        sh 'make test'\n      }\n    }\n    stage('Deploy') {\n      steps {\n        sh 'make deploy'\n      }\n    }\n  }\n}`)} data-tip data-for="copyTooltip">
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>

      <h2 className="section-title">Automated Testing in CI/CD</h2>
      <img src={testingImage} alt="Automated Testing" className="image" />
      <p>
        Automated testing is a crucial component of any CI/CD pipeline. It ensures that code changes do not introduce new bugs or break existing functionality. There are various types of tests that can be automated, including unit tests, integration tests, and end-to-end tests.
      </p>
      <h3 className="subsection-title">Example: Writing Unit Tests</h3>
      <p>
        Here is an example of a simple unit test written in JavaScript using the Jest framework:
      </p>
      <pre className="code-block">
        <code>
{`const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`}
        </code>
      </pre>
      <button className="copy-button" onClick={() => copyToClipboard(`const sum = require('./sum');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});`)} data-tip data-for="copyTooltip">
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>

      <h2 className="section-title">Deploying with CI/CD</h2>
      <img src={deploymentImage} alt="Deployment" className="image" />
      <p>
        Deployment is the final stage of the CI/CD pipeline. It involves releasing the built and tested code to a production environment. Automated deployment reduces the risk of human error and ensures that deployments are consistent and repeatable.
      </p>
      <h3 className="subsection-title">Example: Deploying to Kubernetes</h3>
      <p>
        Below is an example of a Kubernetes deployment configuration:
      </p>
      <pre className="code-block">
        <code>
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app-image:latest
        ports:
        - containerPort: 80`}
        </code>
      </pre>
      <button className="copy-button" onClick={() => copyToClipboard(`apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app-image:latest\n        ports:\n        - containerPort: 80`)} data-tip data-for="copyTooltip">
        {copied ? 'Copied!' : 'Copy YAML'}
        <FiCopy className="copy-icon" />
      </button>

      <h2 className="section-title">Advanced CI/CD Pipeline Concepts</h2>
      <p>
        As you become more comfortable with CI/CD pipelines, you may want to explore advanced concepts such as:
      </p>
      <ul>
        <li>Parallel Builds: Running multiple builds in parallel to speed up the CI/CD process.</li>
        <li>Canary Deployments: Gradually rolling out new versions to a subset of users before a full deployment.</li>
        <li>Rollback Strategies: Implementing strategies to quickly revert to a previous version if something goes wrong.</li>
      </ul>

      <h3 className="subsection-title">Example: Parallel Builds</h3>
      <p>
        Here's an example of a Jenkins pipeline configuration that runs builds in parallel:
      </p>
      <pre className="code-block">
        <code>
{`pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build Java') {
          steps {
            sh 'make build-java'
          }
        }
        stage('Build Node') {
          steps {
            sh 'make build-node'
          }
        }
      }
    }
    stage('Test') {
      steps {
        sh 'make test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'make deploy'
      }
    }
  }
}`}
        </code>
      </pre>
      <button className="copy-button" onClick={() => copyToClipboard(`pipeline {\n  agent any\n  stages {\n    stage('Build') {\n      parallel {\n        stage('Build Java') {\n          steps {\n            sh 'make build-java'\n          }\n        }\n        stage('Build Node') {\n          steps {\n            sh 'make build-node'\n          }\n        }\n      }\n    }\n    stage('Test') {\n      steps {\n        sh 'make test'\n      }\n    }\n    stage('Deploy') {\n      steps {\n        sh 'make deploy'\n      }\n    }\n  }\n}`)} data-tip data-for="copyTooltip">
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>

      <h3 className="subsection-title">Example: Canary Deployment</h3>
      <p>
        Below is an example of a Kubernetes configuration for a canary deployment:
      </p>
      <pre className="code-block">
        <code>
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app-image:stable
        ports:
        - containerPort: 80
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-canary
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-app-canary
  template:
    metadata:
      labels:
        app: my-app-canary
    spec:
      containers:
      - name: my-app
        image: my-app-image:canary
        ports:
        - containerPort: 80`}
        </code>
      </pre>
      <button className="copy-button" onClick={() => copyToClipboard(`apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app-image:stable\n        ports:\n        - containerPort: 80\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-canary\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: my-app-canary\n  template:\n    metadata:\n      labels:\n        app: my-app-canary\n    spec:\n      containers:\n      - name: my-app\n        image: my-app-image:canary\n        ports:\n        - containerPort: 80`)} data-tip data-for="copyTooltip">
        {copied ? 'Copied!' : 'Copy YAML'}
        <FiCopy className="copy-icon" />
      </button>

      <h3 className="subsection-title">Example: Rollback Strategy</h3>
      <p>
        Here's an example of a Jenkins pipeline step to rollback a deployment:
      </p>
      <pre className="code-block">
        <code>
{`stage('Rollback') {
  steps {
    script {
      def rollbackVersion = input message: 'Rollback to which version?', parameters: [string(defaultValue: '1.0.0', description: 'Version to rollback to', name: 'VERSION')]
      sh "kubectl set image deployment/my-app my-app=my-app-image:${rollbackVersion}"
    }
  }
}`}
        </code>
      </pre>
      <button className="copy-button" onClick={() => copyToClipboard(`stage('Rollback') {\n  steps {\n    script {\n      def rollbackVersion = input message: 'Rollback to which version?', parameters: [string(defaultValue: '1.0.0', description: 'Version to rollback to', name: 'VERSION')]\n      sh "kubectl set image deployment/my-app my-app=my-app-image:${rollbackVersion}"\n    }\n  }\n}`)} data-tip data-for="copyTooltip">
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>

      <h2 className="section-title">Conclusion</h2>
      <p>
        Implementing a CI/CD pipeline can significantly improve the efficiency and reliability of your software development process. By automating builds, tests, and deployments, you can reduce the risk of errors and ensure that your software is always in a deployable state. Start small, iterate, and continuously improve your CI/CD pipeline to suit your project's needs.
      </p>

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

export default CICDPipelineTemplate;
