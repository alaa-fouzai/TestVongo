<?php
header("Content-Type:application/json");
 header("Access-Control-Allow-Origin: *");
if (isset($_GET['Userid']) && $_GET['Userid']!="") {
 include('connection.php');
 $Userid = $_GET['Userid'];
 $name = $_GET['name'];
 $stock = $_GET['stock'];
 $decription = $_GET['decription'];
 $price = $_GET['price'];
 $result = mysqli_query(
 $con,
 "INSERT INTO `item`( `User_id`, `name`, `description`, `stock`, `price`) VALUES ($Userid,'$name ','$decription',$stock,$price)");
 $last_id = $con->insert_id;
 if($last_id > 0){
 response("ok",$last_id,"Item Added");
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