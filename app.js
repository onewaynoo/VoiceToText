const express = require("express");
const ejs = require("ejs");
const pdf = require("pdf-creator-node");
const fs = require("fs");

const template = fs.readFileSync("./template/template.html","utf-8");
const options = {
  format: 'A4',
  orientation: 'portrait',
  border: '10mm'
}

const document = {
html: template,
data: {
  message: "dynamic message"
},
path: "./pdfs/mynewpdf.pdf",
}

pdf
    .create(document,options)
    .then((res)=>{
  console.log(err);
})
.catch((err)=>{
console.log(err);
});

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index");
});
app.get("/documents",function(req,res){
  res.render("documents");
});
app.get("/login",function(req,res){
  res.render("login");
});
app.get("/register",function(req,res){
  res.render("register");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
