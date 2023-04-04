# basicInformationalSite

To run:
```
cd server
npm ci
```
for express :
```
node indexWithExpress.js
```
for vanilla http
```
node index.js
```
then go to localhost:8080
<section id="assignment">
  <h3><a href="#assignment" class="anchor-link">Assignment</a></h3>

  <div class="lesson-content__panel">
    <ol>
      <li>Make a project directory and create the following files inside that directory:
        <ul>
          <li>index.html</li>
          <li>about.html</li>
          <li>contact-me.html</li>
          <li>404.html</li>
        </ul>
      </li>
      <li>Create your node.js server file <code>index.js</code> and add the code needed to serve the right page according to the url.
        <ul>
          <li><a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">localhost:8080</a> should take users to index.html</li>
          <li><a href="http://localhost:8080/about" target="_blank" rel="noopener noreferrer">localhost:8080/about</a> should take users to about.html</li>
          <li><a href="http://localhost:8080/contact-me" target="_blank" rel="noopener noreferrer">localhost:8080/contact-me</a> should take users to contact-me.html</li>
          <li>404.html should display any time the user tries to go to a page not listed above.</li>
        </ul>
      </li>
    </ol>
  </div>

</section>