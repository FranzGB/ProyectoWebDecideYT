var carta_uno = 0;
var carta_dos = 1; 
var ServerResponse;
var UNAME = document.cookie;
var dummy=[]


window.onload=function () {
    var interval = 3000;
    request_live();
    request_iniciativas();
    const cargar_mas = document.getElementById("abajo");
    const votar_1 = document.getElementById("votar1")
    const votar_2 = document.getElementById("votar2")
    cargar_mas.addEventListener('click', e=>{
        if(votar_1.className=="ocultar"){
            votar_1.className="clickeable"
        }
        if(votar_2.className=="ocultar"){
            votar_2.className="clickeable"
        }
        max = ServerResponse.length - 1;
        if (carta_dos == max || carta_uno==max){
            alert("No se encuentran más iniciativas")
    
        } 
        else {
            
            if (max%2) {
                //the number is odd
                carta_uno = carta_uno + 2;
                carta_dos = carta_dos +2;
                change_cards();
            } else {
            //the number is even
                carta_uno = carta_uno +2;   
                change_cards();
            }
        }
    })
    votar_1.addEventListener('click', e=>{
       id_iniciativa1 = document.getElementById("id_ini1").textContent;
       insertar_voto(id_iniciativa1);
       votar_1.className="ocultar";
        
    })
    votar_2.addEventListener('click', e=>{
        id_iniciativa2 = document.getElementById("id_ini2").textContent;
        insertar_voto(id_iniciativa2);
        votar_2.className="ocultar";
         
     })
    
}
function request_live() {
    var xhttp =  new XMLHttpRequest();
    xhttp.open("GET", "request_update.php",true);
    xhttp.send();
    xhttp.onreadystatechange =function(){
        if(this.readyState==4 && this.status==200){
            var response = xhttp.responseText.split(';');
            document.getElementById("number_voters").textContent =response[0];
            document.getElementById("number_approved").textContent = response[1];
            document.getElementById("number_total").textContent = response[2];
            document.getElementById("number_open").textContent =response[3];
        }
    }   
}
function request_iniciativas() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "request_iniciativas.php",true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200){
            ServerResponse = xhttp.responseText.split(';');
            ServerResponse.splice(-1,1);
            change_cards();
        }   
    }
    
}
function insertar_voto (id_iniciativa) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "voto_register.php?username="+UNAME+"&id="+id_iniciativa,true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200){
            alert(xhttp.responseText);
        } 
    }
}
function check_votes(id_iniciativa){
    var get_votes =new XMLHttpRequest();
    get_votes.open("GET","get_votes.php?id="+id_iniciativa,true);
    get_votes.send();
    get_votes.onreadystatechange= function () {
        if(this.readyState==4 && this.status==200){
            if (id_iniciativa%2){
                document.getElementById("goal1").textContent = document.getElementById("goal1").textContent + " Actual: " + this.responseText
            }
            else{
                document.getElementById("goal2").textContent = document.getElementById("goal2").textContent + " Actual: " + this.responseText
            }
            
        }
    }
}
function change_cards() {
    var IniciativaJSON_1 = JSON.parse(ServerResponse[carta_uno]);
    var IniciativaJSON_2 = JSON.parse(ServerResponse[carta_dos]);
    document.getElementById("tit1").textContent = IniciativaJSON_1.titulo
    document.getElementById("tit2").textContent = IniciativaJSON_2.titulo
    document.getElementById("autor1").textContent = IniciativaJSON_1.usuario
    document.getElementById("autor2").textContent = IniciativaJSON_2.usuario
    document.getElementById("problema1").textContent = IniciativaJSON_1.lugar
    document.getElementById("problema2").textContent = IniciativaJSON_2.lugar
    document.getElementById("descripcion1").textContent = IniciativaJSON_1.descripcion
    document.getElementById("descripcion2").textContent = IniciativaJSON_2.descripcion
    document.getElementById("id_ini1").textContent = IniciativaJSON_1.id
    document.getElementById("id_ini2").textContent = IniciativaJSON_2.id
    check_votes(IniciativaJSON_1.id);
    check_votes(IniciativaJSON_2.id);
    var status1 = IniciativaJSON_1.estado;
    var status2 = IniciativaJSON_2.estado;
    if(status1=='0'){
        document.getElementById("status1").textContent = "En Curso";
    }
    else if(status1=='1'){
        document.getElementById("status1").textContent = "Aprobado";
    }
    else if(status1=='2'){
        document.getElementById("status1").textContent = "No aprobado";
    }

    if(status2=='0'){
        document.getElementById("status2").textContent = "En Curso";
    }
    else if(status2=='1'){
        document.getElementById("status2").textContent = "Aprobado";
    }
    else if(status2=='2'){
        document.getElementById("status2").textContent = "No aprobado";
    }
    
    // Split time and date
    var tmp1 = IniciativaJSON_1.fecha.split(" ");
    var tmp2 = IniciativaJSON_2.fecha.split(" ");
    document.getElementById("fecha1").textContent = tmp1[0];
    document.getElementById("fecha2").textContent = tmp2[0];
    var objetivo1 = "Requeridos: "+IniciativaJSON_1.objetivo;
    var objetivo2 = "Requeridos: "+IniciativaJSON_2.objetivo;
    document.getElementById("goal1").textContent = objetivo1;
    document.getElementById("goal2").textContent = objetivo2;
    
}
