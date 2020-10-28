<?php
    include 'connection.php';
    $uname = $_POST["uname"];
    $pass = $_POST["pass"];
    //Check if user and password exists
    $cmd = "SELECT * FROM users WHERE uname='{$uname}' LIMIT 1";
    $ans = $conn->query($cmd);
    $good_user = 0;
    while($row = $ans->fetch_array()){
        if($row["uname"]==$uname){
            $good_user = 1;
        }
        if($row["pass"]==$pass){
            echo "Exitoso";
            exit;
        }
    }
    echo 'Fallido '.$good_user;
?>