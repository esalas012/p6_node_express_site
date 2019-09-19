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
  const project = projects[id];
  if(id>=0 && id < projects.length){
    res.render('project', {project});
  }
  else{
    const err = new Error(" Page Not Found");
    err.status = 404;
    next(err);
  }

});

app.use((req, res, next)=>{
  const err = new Error(" Page Not Found");
  err.status = 404;
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
