const titulo = document.getElementById("uname")
const lugar = document.getElementById("pass")

const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener('submit', e=>{
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(titulo.value.length >20){
        warnings+=`El usuario excede los 20 caracteres o es erroneo <br>`
        entrar = true
    }

    if(lugar.value.length >16){
        warnings+=`La contraseña excede los 16 caracteres o es erroneo <br>`
        entrar = true
    }


    if(entrar){
        parrafo.innerHTML= warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
