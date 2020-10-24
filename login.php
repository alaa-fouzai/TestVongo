<?php
header("Content-Type:application/json");
 header("Access-Control-Allow-Origin: *");
if (isset($_GET['email']) && $_GET['Password']!="") {
 include('connection.php');
 $email = $_GET['email'];
 $password = $_GET['Password'];
 $result = mysqli_query(
 $con,
 "SELECT * FROM `user` WHERE email = '$email' and Password ='$password'");
 $last_id = $con->insert_id;
  if(mysqli_num_rows($result)>0){
 $row = mysqli_fetch_array($result);
 $amount = $row['email'];
 response("ok",$row['id'],$row['FirstName'],$row['LastName'],$row['email'],"Welcome back");
 mysqli_close($con);
 }else{
 response("err",0,"","","","try again");
 }
}else{
 response("err",0,"","","","invalid request");
 }
 
function response($status,$id,$FirstName,$LastName,$email,$message){
 $response['message'] = $message;
 $response['status'] = $status;
 $response['email'] = $email;
 $response['FirstName'] = $FirstName;
 $response['LastName'] = $LastName;
 $response['id'] = $id;
 $json_response = json_encode($response);
 echo $json_response;
}
?>