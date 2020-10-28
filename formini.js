const titulo = document.getElementById("titulo");
const lugar = document.getElementById("problema");
const description = document.getElementById("description");

const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener('submit', e=>{
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    if(titulo.value.length >100){
        warnings+=`El titulo excede los 100 caracteres <br>`;
        entrar = true;
    }
   
    if(lugar.value.length>280){
        warnings+=`El problema excede los 280 caracteres <br>`;
        entrar = true;
    }

    if(description.value.length >1000){
        warnings+=`La descripción excede los 1000 caracteres <br>`;
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML= warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
})

