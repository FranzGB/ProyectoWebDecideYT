<?php
    $conn = mysqli_connect("localhost", "root","","proyectoweb");
    if(!$conn){
        echo "Hubo un error al conectarse a la base de datos";
        exit;
    }
?>