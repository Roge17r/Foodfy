const recipes = require('../data')



exports.home =
function(req,res){
    return res.render("users/home", {recipes})
}

exports.about =
function(req,res){
    return res.render("users/about")
}

exports.recipes =
function(req,res){
    return res.render("users/recipes",{recipes})
}

exports.detail =
function (req, res) {
   
    const recipeIndex = req.params.index

    const recipe = recipes[recipeIndex]

    return res.render("users/detail",{ recipe })

  }

  