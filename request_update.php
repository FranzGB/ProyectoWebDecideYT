<?php
    include 'connection.php';
    header("Content-Type: text/html;charset=utf-8");
    $votes ="SELECT COUNT(DISTINCT usuario_voto) FROM votos";
    $open = "SELECT COUNT(*) FROM iniciativa WHERE NOW()<deadline";
    $total = "SELECT COUNT(id) FROM iniciativa";
    $approved = "SELECT COUNT(*) FROM iniciativa WHERE status=1 ";
    $cmd = array($votes,$approved,$total,$open);
    for($i = 0;$i < count($cmd);$i++){
        $ans = $conn->query($cmd[$i]);
        while($result=$ans->fetch_array()){

            echo "{$result[0]};";
        }
    }

?>