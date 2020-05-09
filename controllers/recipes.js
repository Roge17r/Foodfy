const fs = require('fs')
const data = require('../data.json')
// const recipes = require('..data.json/')


exports.index =
function (req,res){
    return res.render('admin/recipes',{ recipes: data.recipes })
}

exports.show =

function(req,res){

    const recipeIndex = req.params.index

    const recipe = data.recipes[recipeIndex]

    return res.render('admin/detail',{ recipe })
}

exports.create = 
function (req,res){
    return res.render('admin/create',{ recipes: data.recipes })
}

exports.post =
function (req, res){
   
    const keys = Object.keys(req.body)
        for(key of keys) {
            if(req.body[key] == ''){
                return res.send('POR FAVOR, PREENCHA TODOS OS CAMPOS!')
            }
        }
       
        data.recipes.push({
            ...req.body
        })
        fs.writeFile('data.json', JSON.stringify(data,null,2),function(err){
            if (err) return res.send('Write the file error')

            return res.redirect(`recipes/${data.recipes.length -1}`)
        })

}