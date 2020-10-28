<?php
    include 'connection.php';
    $assists ="SELECT COUNT(DISTINCT user) FROM asistencia WHERE asist=1";
    $past = "SELECT COUNT(*) FROM asamblea WHERE NOW()>fecha_fin";
    $future = "SELECT COUNT(*) FROM asamblea WHERE NOW()<=fecha_fin";
    $cmd = array($assists,$past,$future);
    for($i = 0;$i < count($cmd);$i++){
        $ans = $conn->query($cmd[$i]);
        while($result=$ans->fetch_array()){

            echo "{$result[0]};";
        }
    }

?>