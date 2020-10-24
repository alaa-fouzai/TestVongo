<?php
header("Content-Type:application/json");
 header("Access-Control-Allow-Origin: *");
if (isset($_GET['LastName']) && $_GET['LastName']!="") {
 include('connection.php');
 $LastName = $_GET['LastName'];
 $FirstName = $_GET['FirstName'];
 $Password = $_GET['Password'];
 $email = $_GET['email'];
 $result = mysqli_query(
 $con,
 "INSERT INTO `user`( `LastName`, `FirstName`, `Password`, `email`) VALUES ('$LastName','$FirstName','$Password','$email')");
 $last_id = $con->insert_id;
 if($last_id > 0){
 response("ok",$last_id,"you can now LogIn");
 mysqli_close($con);
 }else{
 response("err",mysqli_error($con),"email may be already in use");
 }
}else{
 response("err","Invalid Request","ereur");
 }
 
function response($status,$id,$message){
 $response['message'] = $message;
 $response['status'] = $status;
 $response['id'] = $id;
 $json_response = json_encode($response);
 echo $json_response;
}
?>