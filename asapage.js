var carta_uno = 0;
var carta_dos = 1; 
var ServerResponse;
var UNAME = document.cookie;
window.onload=function () {

    var interval = 3000;
    request_live();
    request_asambleas();
    const cargar_mas = document.getElementById("abajo");
    const asistere_1 = document.getElementById("asistir1")
    const asistere_2 = document.getElementById("asistir2")
    cargar_mas.addEventListener('click', e=>{
        if(asistere_1.className=="ocultar"){
            asistere_1.className="clickeable"
        }
        if(asistere_2.className=="ocultar"){
            asistere_2.className="clickeable"
        }
        max = ServerResponse.length - 1;
        if (carta_dos == max || carta_uno==max){
            alert("No se encuentran más asambleas")
    
        } 
        else {
            //the number is odd?
            if (max%2) {
                carta_uno = carta_uno + 2;
                carta_dos = carta_dos +2;
                change_cards();
            } else {
            //the number is even
                carta_uno = carta_uno +2;
                carta_dos = carta_dos +2;
                change_cards();
            }
        }
    })
    asistere_1.addEventListener('click', e=>{
       id_asamblea1 = document.getElementById("id_asa1").textContent;
       insertar_asistencia(id_asamblea1);
       asistere_1.className="ocultar";
        
    })
    asistere_2.addEventListener('click', e=>{
        id_asamblea2 = document.getElementById("id_asa2").textContent;
        insertar_asistencia(id_asamblea2);
        asistere_2.className="ocultar";
         
     })
}
function request_live() {
    var xhttp =  new XMLHttpRequest();
    xhttp.open("GET", "request_update_asa.php", true);
    xhttp.send();
    xhttp.onreadystatechange =function(){
        if(this.readyState==4 && this.status==200){
            var response = xhttp.responseText.split(';');
            document.getElementById("number_assists").textContent =response[0];
            document.getElementById("number_past").textContent = response[1];
            document.getElementById("number_future").textContent = response[2];
        }
    }   
}
function request_asambleas() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "request_asamblea.php",true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200){
            ServerResponse = xhttp.responseText.split(';');
            ServerResponse.splice(-1,1);
            change_cards();
         
        }   
    }
    
}
function change_cards() {
    var AsambleaJSON_1 = JSON.parse(ServerResponse[carta_uno]);
    var AsambleaJSON_2 = JSON.parse(ServerResponse[carta_dos]);
    document.getElementById("tit1").textContent = AsambleaJSON_1.titulo
    document.getElementById("tit2").textContent = AsambleaJSON_2.titulo
    document.getElementById("autor1").textContent = AsambleaJSON_1.usuario
    document.getElementById("autor2").textContent = AsambleaJSON_2.usuario
    document.getElementById("lugar1").textContent = AsambleaJSON_1.lugar
    document.getElementById("lugar2").textContent = AsambleaJSON_2.lugar
    document.getElementById("descripcion1").textContent = AsambleaJSON_1.descripcion
    document.getElementById("descripcion2").textContent = AsambleaJSON_2.descripcion
    document.getElementById("id_asa1").textContent = AsambleaJSON_1.id
    document.getElementById("id_asa2").textContent = AsambleaJSON_2.id
    // Split time and date
    var tmp1 = AsambleaJSON_1.fecha.split(" ");
    var tmp2 = AsambleaJSON_2.fecha.split(" ");
    var fecha1 = tmp1[0];
    var hora1 = tmp1[1];
    var fecha2 = tmp2[0];
    var hora2 = tmp2[1]; 
    document.getElementById("fecha1").textContent = fecha1;
    document.getElementById("fecha2").textContent = fecha2;
    document.getElementById("hora1").textContent = hora1;
    document.getElementById("hora2").textContent = hora2;   
    
}
function insertar_asistencia(id_asamblea) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "asist_register.php?username="+UNAME+"&id="+id_asamblea,true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200){
            alert(xhttp.responseText);
        }   
    }
    
}

