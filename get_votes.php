<?php
    include 'connection.php';
    $id = $_REQUEST["id"];
    //FETCH me the number of votes
    $cmd = "SELECT COUNT(*) FROM `votos` WHERE id={$id}";
    //FETCH me the number of entries that the dealine has not past
    $date_cmd = "SELECT count(*) FROM iniciativa WHERE id ={$id} AND deadline >= NOW()";
    $goal_cmd = "SELECT goal FROM iniciativa WHERE id={$id}";
    $ans = $conn->query($cmd);
    $date_ans = $conn->query($date_cmd); 
    $row = $ans->fetch_array();//the number of votes;
    $goal_ans =$conn->query($goal_cmd); //fetch me the goal required
    $goal = $goal_ans->fetch_array(); //the goal
   
    if(($date_ans->fetch_array())[0]){
        //The date is ok
        if($row[0]>=$goal[0]){
            //Great, it is approved
            $update_cmd = "UPDATE iniciativa SET status=1 WHERE id={$id}";
            $conn->query($update_cmd);
        }

    }
    else{
        //Date is past
        if($row[0]<$goal[0]){
            //Bad, it is expired
            $update_cmd = "UPDATE iniciativa SET status=2 WHERE id={$id}";
            $conn->query($update_cmd);
        }
    }
    echo "{$row[0]}";
?>