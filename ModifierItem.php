<?php
header("Content-Type:application/json");
 header("Access-Control-Allow-Origin: *");
if (isset($_GET['id']) && $_GET['id']!="") {
 include('connection.php');
 $id = $_GET['id'];
 $name = $_GET['name'];
 $stock = $_GET['stock'];
 $decription = $_GET['decription'];
 $price = $_GET['price'];
 $result = mysqli_query(
 $con,
 "UPDATE `item` SET `name`='$name ',`description`='$decription',`stock`=$stock,`price`=$price WHERE id = $id");
 $last_id = $con->insert_id;
 if($result){
 response("ok",$last_id,"Item Modified");
 mysqli_close($con);
 }else{
 response("err",mysqli_error($con),"Error");
 mysqli_close($con);
 }
}else{
 response("err","Invalid Request","ereur");
 mysqli_close($con);
 }
 
function response($status,$id,$message){
 $response['message'] = $message;
 $response['status'] = $status;
 $response['id'] = $id;
 $json_response = json_encode($response);
 echo $json_response;
}
?>