<?php
	$cn = mysqli_connect("localhost", "root", "");
	$db = mysqli_select_db($cn, "sactechshop");

	$EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode($EncodedData, true);

	$fname = $DecodedData['Fullname'];
	$email = $DecodedData['Email'];
	$uname = $DecodedData['Username'];
	$pwd = $DecodedData['Password'];
	// // $date = NOW();
	// $fname = $_POST['Fullname'];
	// $email = $_POST['Email'];
	// $uname = $_POST['Username'];
	// $pwd = $_POST['Password'];


	$queryInsert = "INSERT INTO register (Fullname, Email, Username, Password, DateReg) VALUES('$fname', '$email', '$uname', '$pwd', NOW()) ";

	$result = mysqli_query($cn, $queryInsert);

	if($result){
		$message = "You have been registered successfully.";
	}else{
		$message = "Something went wrong. Try again later.";
	}

	$Response[] = array("Message" => $message);
	// $Response = array("Message" => $message);

	echo json_encode($Response);


?>