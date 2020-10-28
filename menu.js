const desplegable = document.querySelector('.desplegable')
const menu = document.querySelector('.menu')

desplegable.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click',e=>{
    if(menu.classList.contains('spread')
    && e.target !=menu && e.target != desplegable){
        menu.classList.toggle("spread")
    }
})
