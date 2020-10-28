const imagenes1 = document.getElementById('ga1')
const imagenes2 = document.getElementById('ga2')
const imagenes3 = document.getElementById('ga3')
const imagenes4 = document.getElementById('ga4')
const imagenes5 = document.getElementById('ga5')
const imagenes6 = document.getElementById('ga6')
const imagenesLight1 = document.querySelector('.historia1')
const imagenesLight2 = document.querySelector('.historia2')
const imagenesLight3 = document.querySelector('.historia3')
const imagenesLight4 = document.querySelector('.historia4')
const imagenesLight5 = document.querySelector('.historia5')
const imagenesLight6 = document.querySelector('.historia6')
const contenedorLight1 = document.querySelector('.light-box1')
const contenedorLight2 = document.querySelector('.light-box2')
const contenedorLight3 = document.querySelector('.light-box3')
const contenedorLight4 = document.querySelector('.light-box4')
const contenedorLight5 = document.querySelector('.light-box5')
const contenedorLight6 = document.querySelector('.light-box6')

imagenes1.addEventListener('click',()=>{
    contenedorLight1.classList.toggle('show1')
    imagenesLight1.classList.toggle('showImage1')
})

contenedorLight1.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight1){
        contenedorLight1.classList.toggle('show1')
        imagenesLight1.classList.toggle('showImage1')        
    }
})

imagenes2.addEventListener('click',()=>{
    contenedorLight2.classList.toggle('show2')
    imagenesLight2.classList.toggle('showImage2')
})

contenedorLight2.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight2){
        contenedorLight2.classList.toggle('show2')
        imagenesLight2.classList.toggle('showImage2')        
    }
})

imagenes3.addEventListener('click',()=>{
    contenedorLight3.classList.toggle('show3')
    imagenesLight3.classList.toggle('showImage3')
})

contenedorLight3.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight3){
        contenedorLight3.classList.toggle('show3')
        imagenesLight3.classList.toggle('showImage3')        
    }
})

imagenes4.addEventListener('click',()=>{
    contenedorLight4.classList.toggle('show4')
    imagenesLight4.classList.toggle('showImage4')
})

contenedorLight4.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight4){
        contenedorLight4.classList.toggle('show4')
        imagenesLight4.classList.toggle('showImage4')        
    }
})

imagenes5.addEventListener('click',()=>{
    contenedorLight5.classList.toggle('show5')
    imagenesLight5.classList.toggle('showImage5')
})

contenedorLight5.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight5){
        contenedorLight5.classList.toggle('show5')
        imagenesLight5.classList.toggle('showImage5')        
    }
})

imagenes6.addEventListener('click',()=>{
    contenedorLight6.classList.toggle('show6')
    imagenesLight6.classList.toggle('showImage6')
})

contenedorLight6.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight6){
        contenedorLight6.classList.toggle('show6')
        imagenesLight6.classList.toggle('showImage6')        
    }
})
