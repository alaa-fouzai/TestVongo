<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "testvongo";

// Create connection
$con = mysqli_connect($servername, $username, $password,$db_name);

// Check connection
if (mysqli_connect_errno()){
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 die();
}
?>