<?php
    include 'connection.php';
    header("Content-Type: text/html;charset=utf-8");
    $cmd = "SELECT JSON_OBJECT('id',id,'usuario',usuario,'descripcion',descripcion,'titulo',titulo,'problema',problema,'objetivo',goal,'alcance',tipo,'fecha',deadline,'estado',status) FROM `iniciativa`";
    $ans = $conn->query($cmd);
    while($row = $ans->fetch_array()){
        echo "{$row[0]};";
    }


?>