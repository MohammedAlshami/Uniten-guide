<?php
function info($value, $file_name){
	$myfile = fopen($file_name, "w") or die("Unable to open file!");

	fwrite($myfile, $value);
	fwrite($myfile, $value);
	fclose($myfile);
}
$patient =  $_GET["patient"];
$patient =  (int)$patient;
$name =  $_GET["name"];
$doctor =  $_GET["doctor"];
$doctor =   (int)$doctor;
$gender =  $_GET["gender"];
$birth =  $_GET["birth"];
$num =  $_GET["num"];
$num =   (int)$num;
$address=  $_GET["address"];
$med =  $_GET["med"];
$med = html_entity_decode($med);


// $patient =  2234;
// $name =  'Zaid';
// $doctor =  1;
// $gender =  'M';
// $birth =  '2010-02-02';
// $num =  01164504470;
// $address=  'Idk wher';
// $med =  "No history";

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

$sql = "INSERT INTO Patient VALUES ('{$patient}','{$name}', '{$gender}','{$birth}', '{$num}', '{$address}', '{$med}', '{$doctor}')";

$result = $link->query($sql);

$sql = "select PATIENT_ID, NAME, GENDER, DATE_OF_BIRTH, PHONE_NO,ADDRESS, MED_HISTORY, Doctor_ID FROM Patient WHERE PATIENT_ID = '". $patient ."' ;";
$result = $link->query($sql);

$temp_result = "";
$res = $result->fetch_assoc();
$temp_result .= $res['PATIENT_ID'].'$';
$temp_result .= $res['NAME'].'$';
$temp_result .= $res['DATE_OF_BIRTH'].'$';
$temp_result .= $res['GENDER'].'$';
$temp_result .= $res['PHONE_NO'].'$';
$temp_result .= $res['ADDRESS'].'$';
$temp_result .= $res['MED_HISTORY'].'$';
$temp_result .= $res['Doctor_ID'].'$';
$temp_result .= '\n';


info($temp_result, 'records.txt');
header("Location: http://127.0.0.1/Database_project/record/options.html");
exit();

?>
