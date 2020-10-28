function validateForm() {
    var form=document.getElementById("registro");
    for(i=0; i<form.childNodes.length; i++){
        if(form.childNodes[i].tagName!='INPUT' ||typeof form.childNodes[i].value=="undefined")
            continue;
        else{
        var x = form.childNodes[i].value;
        if(x == null || x==""){
            alert("Porfavor rellene los campos antes de enviar");
            return false;
            }
        }
    }
    if(document.getElementById("pass").value!=document.getElementById("pass2").value){
        alert("Contraseñas diferentes");
        return false;
    }
    return search_inDB()
    
}
function search_inDB() {
    var xhttp =  new XMLHttpRequest();
    var params = 'uname='+document.getElementById("uname").value+'&email='+document.getElementById("email").value+'&pass='+document.getElementById("pass").value;    
    xhttp.open("POST", "registrarse.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(params);
    xhttp.onreadystatechange =function(){
        if(this.readyState==4 && this.status==200){
            if(xhttp.responseText=='Registrado Exitosamente'){
                
                alert("Registrado Exitosamente");
                window.open('Login.html','_self');
            }
            else{
                alert(xhttp.responseText);
            }
                

            return false;
        }
    }
    return false;
}
