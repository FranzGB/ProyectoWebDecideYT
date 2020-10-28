<?php
    include 'connection.php';
 
    $name = $_POST["name"];
    $email = $_POST["email"];
    $msg = $_POST["msg"];

    
    $cmd = "INSERT INTO contacto(name, email, message) VALUES ('{$name}', '{$email}', '{$msg}')";
    if(!mysqli_query($conn,$cmd)){
    ?>    
    <script type="text/javascript">
        alert("Error al insertar el registro");
    <\script>
    <?php
    }
    else {
    ?>
    <script type="text/javascript">
        alert("Contacto enviado exitosamente");
    </script>
    <?php
    }
    header("refresh:2; url=http://192.168.192.158/ProyectoWeb/Welcome.html");
?>