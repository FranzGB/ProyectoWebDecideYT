var UNAME = null;
function validateForm() {
    var form=document.getElementById("inicio");
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
    return search_inDB()
    
}
function search_inDB() {
    var xhttp =  new XMLHttpRequest();
   
    var params = 'uname='+document.getElementById("uname").value+'&pass='+document.getElementById("pass").value;    
    xhttp.open("POST", "log_in.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(params);
    xhttp.onreadystatechange =function(){
        if(this.readyState==4 && this.status==200){
            if(xhttp.responseText=='Fallido 0'){
                alert("Nombre de usuario y contraseña incorrectos");
            }
            else if(xhttp.responseText=='Fallido 1'){
                alert("Contraseña incorrecta");
            }
            else if(xhttp.responseText=='Exitoso'){
                alert("Sesión iniciada correctamente");
                UNAME = document.getElementById('uname').value;
                document.cookie = UNAME;
                window.open('Welcome.html', "_self");
            }
            
            
            return false;
        }
    }
    return false;
}
