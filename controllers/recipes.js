const fs = require('fs')
const data = require('../data.json')
// const recipes = require('..data.json/')


exports.index =
function (req,res){
    return res.render('admin/index',{ recipes: data.recipes })
}

exports.show =

function(req,res){

    const recipeIndex = req.params.index

    const recipe = data.recipes[recipeIndex]

    return res.render('admin/show',{ recipe })
}

exports.edit =
function(req,res){
    const recipeIndex = req.params.index

    const recipe = data.recipes[recipeIndex]

    return res.render(`admin/edit`,{ recipe })
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
            if (err) return res.sendStatus(400)

            return res.redirect(`recipes/${data.recipes.length -1}`)
        })

}

exports.put = 
function(req,res){
   
    const { index } = req.body
    let { image,title, author, ingredients, preparation, information } = req.body
    recipe = {
        image,
        title, 
        author, 
        ingredients, 
        preparation, 
        information 
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null,2),function(err){
        if(err)return res.sendStatus(400)

        return res.redirect(`recipes/${index}`)
    })
}

exports.delete = 
function(req,res){

    const { index } = req.body
    
    data.recipes.splice(index,1);
    
    fs.writeFile('data.json', JSON.stringify(data,null,2),function(err){
        if(err) return res.sendStatus(400)

        return res.redirect('recipes')
    })


}