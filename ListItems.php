<?php
header("Content-Type:application/json");
 header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["Userid"], false);

$conn = new mysqli("localhost", "root", "", "testvongo");
$stmt = $conn->prepare("SELECT * FROM `item` WHERE User_id = $obj");
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
$response['message'] = 'Refreched !';
$response['status'] = 'ok';
$response['data'] = $outp;
echo json_encode($response);
?>