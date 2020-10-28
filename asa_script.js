var UNAME=document.cookie;

function submitAsa() {
    var xhttp =  new XMLHttpRequest();
    var params ='titulo='+document.getElementById("titulo").value+'&fecha='+document.getElementById("date").value+'&descripcion='+document.getElementById("description").value+"&usuario="+UNAME+"&lugar="+document.getElementById("lugar").value+'&hora='+document.getElementById("tim").value;    
    
    
    
    xhttp.open("POST", "register_asamblea.php", true);
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