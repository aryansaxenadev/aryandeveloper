import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from 'react-share';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './FastAPITemplate.css'; // Import CSS file for styling
import networkImage from '../network.png';
import imageOptimization from '../optimize.png';
import lazyLoading from '../load.jpg';

const OptimizingTemplate = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href; // Get current URL

  // Function to copy URL to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <div className="blog-container">
      <p>
        In today's digital age, web performance is critical for providing a good user experience and ensuring that visitors stay engaged with your content. In this guide, we'll cover various techniques to optimize your website's performance.
      </p>

      <h2 className="section-title">Why Web Performance Matters</h2>
      <p>
        Web performance directly impacts user experience, SEO rankings, and conversion rates. A fast-loading website can lead to higher engagement and better user satisfaction.
      </p>
      <img src={networkImage} alt="Network performance" className="blog-image" />

      <h2 className="section-title">Key Performance Metrics</h2>
      <ul>
        <li><strong>Load Time</strong>: The total time taken for a page to fully load.</li>
        <li><strong>Time to First Byte (TTFB)</strong>: The time it takes for the browser to receive the first byte of information from the server.</li>
        <li><strong>First Contentful Paint (FCP)</strong>: The time it takes for the first piece of content to be rendered on the screen.</li>
        <li><strong>Largest Contentful Paint (LCP)</strong>: The time it takes for the largest piece of content to be visible to the user.</li>
      </ul>

      <h2 className="section-title">1. Minimize HTTP Requests</h2>
      <p>
        Each file required to load a page (CSS, JS, images, etc.) results in an HTTP request. Minimizing these requests can significantly improve page load times.
      </p>
      <h3 className="subsection-title">Combine Files</h3>
      <p>
        By combining multiple CSS and JavaScript files into a single file, you can reduce the number of HTTP requests. This can be done using build tools like Webpack.
      </p>
      <h3 className="subsection-title">Use CSS Sprites</h3>
      <p>
        CSS Sprites combine multiple images into a single image file, which reduces the number of image requests. You can use CSS to display the required part of the sprite.
      </p>
      <img src={imageOptimization} alt="Image Optimization" className="blog-image" />

      <h2 className="section-title">2. Optimize Images</h2>
      <p>
        Images often account for the majority of a webpage's load time. Optimizing images can have a significant impact on performance.
      </p>
      <h3 className="subsection-title">Proper Formats</h3>
      <p>
        Use modern image formats like WebP, which provide better compression than traditional formats like JPEG and PNG.
      </p>
      <h3 className="subsection-title">Image Compression</h3>
      <p>
        Compress images using tools like ImageOptim or online services like TinyPNG to reduce file sizes without compromising quality.
      </p>

      <h2 className="section-title">3. Enable Browser Caching</h2>
      <p>
        Browser caching stores copies of your web pages on the user's device, reducing the amount of data the browser needs to download when they revisit your site.
      </p>
      <h3 className="subsection-title">Set Cache-Control Headers</h3>
      <p>
        Configure your server to set appropriate cache-control headers for different types of content. This can be done using server configuration files like .htaccess for Apache or nginx.conf for Nginx.
      </p>
      <h3 className="subsection-title">Example</h3>
      <pre>
        <code className="code-block">
{`# Apache .htaccess example
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/html "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>`}
        </code>
      </pre>
      <button
        className="copy-button"
        onClick={() => copyToClipboard(`# Apache .htaccess example
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/html "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>`)}>
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>

      <h2 className="section-title">4. Lazy Load Images and Videos</h2>
      <p>
        Lazy loading defers the loading of images and videos until they are needed, reducing initial page load times.
      </p>
      <h3 className="subsection-title">Example</h3>
      <p>
        Implement lazy loading in HTML by using the <code>loading</code> attribute.
      </p>
      <pre>
        <code className="code-block">
{`<img src="image.jpg" loading="lazy" alt="Lazy loaded image">`}
        </code>
      </pre>
      <button
        className="copy-button"
        onClick={() => copyToClipboard(`<img src="image.jpg" loading="lazy" alt="Lazy loaded image">`)}>
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>
      <img src={lazyLoading} alt="Lazy Loading" className="blog-image" />

      <h2 className="section-title">5. Minify CSS and JavaScript</h2>
      <p>
        Minifying CSS and JavaScript files removes unnecessary characters, such as whitespace and comments, reducing file sizes and improving load times.
      </p>
      <h3 className="subsection-title">Example</h3>
      <pre>
        <code className="code-block">
{`// Original JavaScript
function greet(name) {
  console.log('Hello, ' + name);
}

// Minified JavaScript
function greet(n){console.log("Hello, "+n)}`}
        </code>
      </pre>
      <button
        className="copy-button"
        onClick={() => copyToClipboard(`// Original JavaScript
function greet(name) {
  console.log('Hello, ' + name);
}

// Minified JavaScript
function greet(n){console.log("Hello, "+n)}`)}>
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>

      <h2 className="section-title">6. Reduce Redirects</h2>
      <p>
        Redirects add additional HTTP requests and increase load times. Minimize the use of redirects to improve performance.
      </p>
      <h3 className="subsection-title">Example</h3>
      <p>
        Avoid multiple redirects like <code>example.com -> www.example.com -> m.example.com -> m.example.com/home</code>.
      </p>

      <h2 className="section-title">7. Use a Content Delivery Network (CDN)</h2>
      <p>
        CDNs distribute your content across multiple servers around the world, reducing latency and improving load times for users regardless of their location.
      </p>
      <h3 className="subsection-title">Popular CDNs</h3>
      <ul>
        <li>Cloudflare</li>
        <li>Amazon CloudFront</li>
        <li>Akamai</li>
        <li>Fastly</li>
      </ul>

      <h2 className="section-title">8. Enable Compression</h2>
      <p>
        Enable Gzip or Brotli compression on your server to reduce the size of your HTML, CSS, and JavaScript files.
      </p>
      <h3 className="subsection-title">Example</h3>
      <pre>
        <code className="code-block">
{`# Enable Gzip compression on Nginx
server {
  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}`}
        </code>
      </pre>
      <button
        className="copy-button"
        onClick={() => copyToClipboard(`# Enable Gzip compression on Nginx
server {
  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}`)}>
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>

      <h2 className="section-title">9. Optimize CSS Delivery</h2>
      <p>
        Ensure that your CSS loads quickly by inlining critical CSS and deferring non-critical CSS.
      </p>
      <h3 className="subsection-title">Example</h3>
      <p>
        Inline critical CSS in the <code>&lt;head&gt;</code> of your HTML.
      </p>
      <pre>
        <code className="code-block">
{`<style>
  /* Critical CSS */
  body { margin: 0; padding: 0; }
</style>`}
        </code>
      </pre>
      <button
        className="copy-button"
        onClick={() => copyToClipboard(`<style>
  /* Critical CSS */
  body { margin: 0; padding: 0; }
</style>`)}>
        {copied ? 'Copied!' : 'Copy Code'}
        <FiCopy className="copy-icon" />
      </button>

      <h2 className="section-title">10. Prioritize Visible Content</h2>
      <p>
        Load visible content first to improve perceived load times. This can be achieved through lazy loading and prioritizing critical resources.
      </p>

      <h2 className="section-title">Additional Tools and Technologies</h2>
      <p>
        Explore these tools and technologies to further optimize web performance:
      </p>
      <ul>
        <li><strong>Web Performance Testing Tools:</strong> Tools like Google PageSpeed Insights, GTmetrix, and WebPageTest for analyzing and improving performance metrics.</li>
        <li><strong>Service Workers:</strong> Implement service workers to cache assets and enable offline browsing.</li>
        <li><strong>Performance Monitoring:</strong> Use tools like New Relic or Datadog to monitor and optimize performance over time.</li>
        <li><strong>Server-Side Rendering (SSR):</strong> SSR can improve initial page load times by rendering pages on the server before sending them to the client.</li>
      </ul>

      <h2 className="section-title">Conclusion</h2>
      <p>
        Optimizing web performance is essential for providing a great user experience and ensuring the success of your website. By following these best practices and utilizing the right tools, you can significantly improve your site's performance and user satisfaction.
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

export default OptimizingTemplate;
