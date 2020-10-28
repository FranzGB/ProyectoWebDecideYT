<?php
    include 'connection.php';
    header("Content-Type: text/html;charset=utf-8");
    $cmd = "SELECT JSON_OBJECT('id',id_asa,'fecha',fecha_fin,'titulo',titulo,'descripcion',descripcion,'usuario',usuario,'lugar',lugar) FROM `asamblea`";

    $ans = $conn->query($cmd);
    while($row = $ans->fetch_array()){
        echo "{$row[0]};";
    }
?>