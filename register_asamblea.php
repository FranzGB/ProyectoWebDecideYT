<?php
    include 'connection.php';
    $titulo = $_REQUEST["titulo"];
    $fecha_fin = $_REQUEST["fecha"];
    //YYYY-MM-DD hh:mm:ss'
    $descripcion =$_REQUEST["descripcion"];
    $usuario = $_REQUEST["usuario"];
    
    
    $hora = $_REQUEST["hora"];
    //HH-MM
    $lugar = $_REQUEST["lugar"];
    $fecha_fin = "{$fecha_fin} {$hora}:00";

    $cmd = "INSERT INTO asamblea(fecha_crea, fecha_fin, titulo, descripcion, usuario, lugar) VALUES ( NOW(), '{$fecha_fin}', '{$titulo}','{$descripcion}','{$usuario}','{$lugar}')";
    if(!mysqli_query($conn,$cmd)){
        echo "Hubo un error".$cmd;
    }
    else{
        echo "Registrado Exitosamente";
    }
?>