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

app.get("/project", (req, res)=>{
  res.redirect("/");
})

app.get("/project/:id", (req, res, next)=>{
  const id = req.params.id;
  const project = projects[id];
  if(id>=0 && id < projects.length){
    res.render('project', {project});
  }
  else{
    res.redirect("/");
  }

});

app.use((req, res, next)=>{
  const err = new Error(" Page Not Found");
  err.status = 404;
  next(err);
})

app.use((err, req, res, next)=>{
  if(err.status >= 100 && err.status < 600){
    res.status(err.status);
  }
  else{
    res.status(500);
  }
  res.render("error", {err});
})

app.listen(3000, ()=>{
  console.log("Listening to port 3000");
});
