# Portfolio Site
  This project was created using Node, Pug and Express.js. This project was
  designed to work on localhost:3000. Images will not load if the user uses
  a different port. The purpose of this site was to showcase all the projects
  I have built. I created an error.pug file that displays the error.message,
  error.status, and error.stack properties.
  When the user navigates to a nonexistent route, the user will either get a
  404 error or be redirected to the index page.
  If the user tries to navigate to /project/1234, the user will be redirected
  to the index page where he/she has access to all the projects.
  If the user enters a nonexistent route like error/error, the user will receive
  a friendly 404 error displaying a "back" button to go back to projects.
  I used a different font (Poppins) for the site, changed the color and background
  color of a few elements in the document. I also added a border to the box
  displaying the skills and technologies.
  Fellow developer can start this application with npm start.
