<?php
    include 'connection.php';
    $usuario = $_REQUEST["username"];
    $id = $_REQUEST["id"];
    $cmd = "INSERT INTO `asistencia`(`asist`, `user`, `id_asa`) VALUES (1,'{$usuario}',{$id})";
    $sql ="SELECT * FROM asistencia WHERE user='{$usuario}' AND id_asa={$id} LIMIT 1";
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
        echo "Ya participas en esta asamblea";
    }
?>