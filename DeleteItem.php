<?php
header("Content-Type:application/json");
 header("Access-Control-Allow-Origin: *");
if (isset($_GET['Id']) && $_GET['Id']!="") {
 include('connection.php');
 $id = $_GET['Id'];
 $result = mysqli_query(
 $con,
 "DELETE FROM `item` WHERE id = $id");
 $last_id = $con->insert_id;
 if($result > 0){
 response("ok",$result,"Item deleted");
 mysqli_close($con);
 }else{
 response("err",mysqli_error($con),"Error");
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