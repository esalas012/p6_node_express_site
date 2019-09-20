const express = require("express");
const { projects } = require("./data.json");

const app = express();

app.use('/static', express.static("public"));

app.set('view engine', 'pug');

app.get("/", (req, res)=>{
  res.render('index', {projects});
});

app.get("/about", (req, res)=>{
  res.render('about');
});

app.get("/project/:id", (req, res, next)=>{
  const id = req.params.id;
  if(id>=0 && id < projects.length){
  const project = projects[id];
  const project_imgs = [];
  for(let i=1; i<project.image_urls.length; i++){
    project_imgs.push(project.image_urls[i]);
  }
  res.render('project', {project, project_imgs});
  }
  else{
    const err = new Error("Page Not Found");
    err.status = 404;
    console.log(`${err.status} | ${err.message}`);
    next(err);
  }

});

app.use((req, res, next)=>{
  const err = new Error("Page Not Found");
  err.status = 404;
  console.log(`${err.status} | ${err.message}`);
  next(err);
});

app.use((err, req, res, next)=>{
  res.locals.error=err;
  res.status(err.status);
  res.render("error");
});

app.listen(3000, ()=>{
  console.log("Listening to port 3000");
});
