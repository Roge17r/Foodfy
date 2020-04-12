const esconder = document.querySelector('.esconder')
const hides =  document.querySelectorAll('.ingred')
const hidesPrep =  document.querySelectorAll('.prep')
const hidesInfo =  document.querySelector('.info')

document.querySelector('.esconder').addEventListener("click",function(){
     for(let hide of hides){
     hide.classList.add('active')
     }
     
     document.querySelector('.esconder').classList.add('active')
     document.querySelector('.mostrar').classList.add('active')
})

document.querySelector('.mostrar').addEventListener("click",function(){
    for(let hide of hides){
        hide.classList.remove('active')
        }
    
    document.querySelector('.esconder').classList.remove('active')
    document.querySelector('.mostrar').classList.remove('active')
})

/** Prep **/
document.querySelector('.esconder1').addEventListener("click",function(){

    for(let hide of hidesPrep){
    hide.classList.add('active')
    }
    
    document.querySelector('.esconder1').classList.add('active')
    document.querySelector('.mostrar1').classList.add('active')
})

document.querySelector('.mostrar1').addEventListener("click",function(){
   for(let hide of hidesPrep){
       hide.classList.remove('active')
       }
   
   document.querySelector('.esconder1').classList.remove('active')
   document.querySelector('.mostrar1').classList.remove('active')
})

/** Info**/
document.querySelector('.esconder2').addEventListener("click",function(){
    
    hidesInfo.classList.add('active')
    document.querySelector('.esconder2').classList.add('active')
    document.querySelector('.mostrar2').classList.add('active')
})

document.querySelector('.mostrar2').addEventListener("click",function(){
    
    hidesInfo.classList.remove('active')
    document.querySelector('.esconder2').classList.remove('active')
    document.querySelector('.mostrar2').classList.remove('active')
})

/*** Page Open ***/
const cards = document.querySelectorAll('.recip')

for(let card of cards) {
    card.addEventListener("click",function(){
        const recipe_index = card.getAttribute('id')
       window.location.href = `recipes/${recipe_index}`
    })
}