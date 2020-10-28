var UNAME = document.cookie;

function submitIni() {
    var xhttp =  new XMLHttpRequest();
    var goal;
    var tipo = document.getElementById("scope").value;
    if(tipo=='1'){
        goal = Number(tipo)*250;
    }
    else if(tipo=='2'){
        goal = Number(tipo)*250;
    }
    else if(tipo=='3'){
        goal = Number(tipo)*250;
    }
    var params ='titulo='+document.getElementById("titulo").value+'&problema='+document.getElementById("problema").value+'&tipo='+document.getElementById("scope").value+"&usuario="+UNAME+"&descripcion="+document.getElementById("description").value+"&goal="+goal;    
    xhttp.open("POST", "register_ini.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(params);
    xhttp.onreadystatechange =function(){
        if(this.readyState==4 && this.status==200){
            if(xhttp.responseText=='Registrado Exitosamente'){
                
                alert("Registrado Exitosamente");
            }
            else{
                alert(xhttp.responseText);
            }
                

            return false;
        }
    }
    return false;
    
}