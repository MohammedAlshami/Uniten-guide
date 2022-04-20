<?php
function info($value, $file_name){
	$myfile = fopen($file_name, "w") or die("Unable to open file!");

	fwrite($myfile, $value);
	fwrite($myfile, $value);
	fclose($myfile);
}
$ID =  $_GET["fname"];

// echo $_GET["lname"];

$db_host        = 'db-mysql-nyc3-00553-do-user-11360077-0.b.db.ondigitalocean.com';
$db_user        = 'doadmin';
$db_pass        = 'AVNS_RaKbZ4Dypu_jyAS';
$db_database    = 'main';
$db_port        = '25060';

$link = mysqli_connect($db_host,$db_user,$db_pass,$db_database,$db_port);

if (!$link) {
	echo "Connection failed!";
	exit();
}

$sql = "use Main";
$result = $link->query($sql);
$sql = "select * from Doctors;";
$result = $link->query($sql);


// get all rows
$temp_result = "";
foreach($result as $row) {
		// info()
    // echo $row[''] . '/' . $row[''] . '/' $row[''] .'/' $row['PHONE_NO'] . '/';
		$temp_result .= $row['Doctor_ID'].' ';
		 $temp_result .= $row['NAME'].' ';
		 $temp_result .= $row['Date_of_birth'].' ';
		 $temp_result .= $row['PHONE_NO'].' ';
		 $temp_result .= $row['ADDRESS'].' ';
		 $temp_result .= '\n';
}

$sql = "select Doctor_ID, NAME from Doctors WHERE Doctor_ID = '". $ID ."' ";
$result = $link->query($sql);
while($row = mysqli_fetch_array($result)) {
	echo $row['Doctor_ID'];
	echo $row['NAME'];
}


info($temp_result, 'results.txt');

//
// Date_of_birth
// PHONE_NO
// ADDRESS
//





?>
