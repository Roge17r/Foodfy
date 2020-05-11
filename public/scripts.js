/** Adiciona classe para trabalhar o layout da página Admin **/
const currentPage = location.pathname

const headerAdmin = document.querySelector(".admin")
if(currentPage.includes("admin")){
    headerAdmin.classList.add("active")
    document.querySelector(".adminF").classList.add("active")
}





/*** Page Open ***/
const recipes = document.querySelectorAll(".recip")
const recipesAdmin = document.querySelectorAll(".recipAdmin")
for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener("click", function () {
        const recipe_index = i
        window.location.href = `recipes/${recipe_index}`
    })
}

for (let i = 0; i < recipesAdmin.length; i++) {
    recipesAdmin[i].addEventListener("click", function () {
        const recipe_index = i
        window.location.href = `recipes/${recipe_index}`
    })
}




/** Esconde opções **/
if(location.pathname.includes("/recipes") && !location.pathname.includes("/create") && !location.pathname.includes("/edit")){
    const hides = document.querySelectorAll(".ingred")
    const hidesPrep = document.querySelectorAll(".prep")
    const hidesInfo = document.querySelector(".info")

    document.querySelector(".esconder").addEventListener("click", function () {
    for (let hide of hides) {
        hide.classList.add("active")
    }

    document.querySelector(".esconder").classList.add("active")
    document.querySelector(".mostrar").classList.add("active")
})

document.querySelector(".mostrar").addEventListener("click", function () {
    for (let hide of hides) {
        hide.classList.remove("active")
    }

    document.querySelector(".esconder").classList.remove("active")
    document.querySelector(".mostrar").classList.remove("active")
})

/** Prep botão **/
document.querySelector(".esconder1").addEventListener("click", function () {

    for (let hide of hidesPrep) {
        hide.classList.add("active")
    }

    document.querySelector(".esconder1").classList.add("active")
    document.querySelector(".mostrar1").classList.add("active")
})

document.querySelector(".mostrar1").addEventListener("click", function () {
    for (let hide of hidesPrep) {
        hide.classList.remove("active")
    }

    document.querySelector(".esconder1").classList.remove("active")
    document.querySelector(".mostrar1").classList.remove("active")
})

/** Info botão**/
document.querySelector(".esconder2").addEventListener("click", function () {

    hidesInfo.classList.add("active")
    document.querySelector(".esconder2").classList.add("active")
    document.querySelector(".mostrar2").classList.add("active")
})

document.querySelector(".mostrar2").addEventListener("click", function () {

    hidesInfo.classList.remove("active")
    document.querySelector(".esconder2").classList.remove("active")
    document.querySelector(".mostrar2").classList.remove("active")

/*** Ausencia de informação ***/

})
if (!document.querySelector(".info").innerHTML) {
    document.querySelector(".info").innerHTML = "Esta receita não contém informações adicionais."
}
}

/** Adiciona Ingredientes **/
if(location.pathname.includes("/create") || location.pathname.includes("/edit"))
{function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);
  
  function addPrepare() {
    const preparations = document.querySelector("#preparation");
    const fieldContainer = document.querySelectorAll(".preparation");
  
    // Realiza um clone do último preparatione adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparations.appendChild(newField);
  }
  
  document
    .querySelector(".add-prepare")
    .addEventListener("click", addPrepare);
}

  //passa o index da url para combinar com o index da receita
  const currentIndex = ~~location.pathname.match(/recipes\/(\d+)/)[1]
  
  document.querySelector("input.recipeIndex").value = currentIndex
  document.querySelector("input.arrayDelete").value = currentIndex
 console.log(currentIndex)
  
 const formDelete = document.querySelector("#form-delete")
formDelete.addEventListener("submit",function(event){
    const confirmation = confirm("Deseja deletar essa receita?")
        if(!confirmation){
                event.preventDefault()
        }
    })
