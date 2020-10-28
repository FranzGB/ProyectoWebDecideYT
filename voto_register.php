<?php
    include 'connection.php';
    $usuario = $_REQUEST["username"];
    $id = $_REQUEST["id"];
    $cmd = "INSERT INTO `votos`(id,usuario_voto) VALUES ({$id},'{$usuario}')";
    $sql ="SELECT * FROM votos WHERE usuario_voto='{$usuario}' AND id={$id} LIMIT 1";
    $ans = $conn->query($sql);
    if($ans->num_rows == 0){
        if(!mysqli_query($conn,$cmd)){
            echo "Error";
        }
        else{
            echo "Éxito";
        }
    }
    else{
        echo "Ya votaste en esta iniciativa";
    }
?>