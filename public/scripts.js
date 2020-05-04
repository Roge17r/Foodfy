const esconder = document.querySelector('.esconder')
const hides = document.querySelectorAll('.ingred')
const hidesPrep = document.querySelectorAll('.prep')
const hidesInfo = document.querySelector('.info')
const recipes = document.querySelectorAll('.recip')

/*** Page Open ***/

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener("click", function () {
        const recipe_index = i
        window.location.href = `recipes/${recipe_index}`
    })
}
/*** Ausencia de informação ***/
if (document.querySelector('.info').innerHTML == '') {
    document.querySelector('.info').innerHTML = "Esta receita não contém informações adicionais."
}


/** Ingredientes botão **/
document.querySelector('.esconder').addEventListener("click", function () {
    for (let hide of hides) {
        hide.classList.add('active')
    }

    document.querySelector('.esconder').classList.add('active')
    document.querySelector('.mostrar').classList.add('active')
})

document.querySelector('.mostrar').addEventListener("click", function () {
    for (let hide of hides) {
        hide.classList.remove('active')
    }

    document.querySelector('.esconder').classList.remove('active')
    document.querySelector('.mostrar').classList.remove('active')
})

/** Prep botão **/
document.querySelector('.esconder1').addEventListener("click", function () {

    for (let hide of hidesPrep) {
        hide.classList.add('active')
    }

    document.querySelector('.esconder1').classList.add('active')
    document.querySelector('.mostrar1').classList.add('active')
})

document.querySelector('.mostrar1').addEventListener("click", function () {
    for (let hide of hidesPrep) {
        hide.classList.remove('active')
    }

    document.querySelector('.esconder1').classList.remove('active')
    document.querySelector('.mostrar1').classList.remove('active')
})

/** Info botão**/
document.querySelector('.esconder2').addEventListener("click", function () {

    hidesInfo.classList.add('active')
    document.querySelector('.esconder2').classList.add('active')
    document.querySelector('.mostrar2').classList.add('active')
})

document.querySelector('.mostrar2').addEventListener("click", function () {

    hidesInfo.classList.remove('active')
    document.querySelector('.esconder2').classList.remove('active')
    document.querySelector('.mostrar2').classList.remove('active')
})
