<?php
    include 'connection.php';
    $uname = $_REQUEST["uname"];
    $email = $_REQUEST["email"];
    $pass = $_REQUEST["pass"];
    //Check if user and mail exists
    $sql ="SELECT * FROM users WHERE uname='{$uname}'OR email='$email'} LIMIT 1";
    $ans = $conn->query($sql);
    if($ans==0){
        // If not then insert it
        $cmd = "INSERT INTO users(uname, email, pass) VALUES ('{$uname}', '{$email}', '{$pass}')";
        if(!mysqli_query($conn,$cmd)){
            echo "Hubo un error".$cmd;
        }
        else{
            echo "Registrado Exitosamente";
        }
    }
    else{
        echo "Su usuario o correo electronico ya ha sido tomado";
    }
    
?>