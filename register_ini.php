<?php
    include 'connection.php';
    $titulo = $_REQUEST["titulo"];
    $problema = $_REQUEST["problema"];
    $descripcion =$_REQUEST["descripcion"];
    $usuario = $_REQUEST["usuario"];
    $tipo = $_REQUEST["tipo"];
    //Calculate goal
    $goal = $_REQUEST["goal"];
    
    

    $cmd = "INSERT INTO iniciativa(titulo, problema, descripcion, tipo, usuario, goal, deadline) VALUES ( '{$titulo}', '{$problema}','{$descripcion}',{$tipo},'{$usuario}',{$goal},NOW()+INTERVAL 1 MONTH)";
    if(!mysqli_query($conn,$cmd)){
        echo "Hubo un error".$cmd;
    }
    else{
        echo "Registrado Exitosamente";
    }
?>