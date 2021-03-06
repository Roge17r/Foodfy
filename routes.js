const express = require('express')
const routes = express.Router()
const main = require('./controllers/main')
const recipes = require('./controllers/recipes')

routes.get("/", main.home)
routes.get("/about", main.about)
routes.get("/recipes", main.recipes)
routes.get("/recipes/:index",main.detail)


routes.get('/admin',function(req, res){
    return res.redirect("admin/recipes")
})
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:index", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:index/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes/", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita


module.exports = routes