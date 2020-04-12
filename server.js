const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache:true
})

server.get("/", function(req,res){
    return res.render("home", {recipes})

})

server.get("/about", function(req,res){
    return res.render("about")
})

server.get("/recipes", function(req,res){
    return res.render("recipes",{recipes})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    // const recipe = [0,1,2,3,4,5]; // Array de receitas carregadas do data.js
    // return res.render("detail",{recipes})

    var recipe = recipes.findIndex(function(item){ return recipe == recipeIndex})
  
  if (!recipe){
      return res.render("not-found")
  }
      return res.render("detail",{recipes})






    console.log(recipe[recipeIndex]);
  })

server.listen(3000,function(){
    console.log('server is running')
})