<?php
$db_host        = 'db-mysql-nyc3-00553-do-user-11360077-0.b.db.ondigitalocean.com';
$db_user        = 'doadmin';
$db_pass        = 'AVNS_RaKbZ4Dypu_jyAS';
$db_database    = 'main';
$db_port        = '25060';

$link = mysqli_connect($db_host,$db_user,$db_pass,$db_database,$db_port);
echo "Hello World!";

if ($link->connect_error) {
  die("Connection failed: " . $link->connect_error);
}
echo "Connected successfully";
echo "<br>";
$sql = "USE main;";
$result = $link->query($sql);




$sql = "INSERT INTO Doctors (Doctor_ID ,NAME,DOB,PHONE,ADDRESS, email) VALUES (26, 'kok lim', '2002-11-21', 01164504470, 'random address', 'shami@gmail.com');";
$result = $link->query($sql);

$sql = "update Doctors set Name='Hami' where doctor_id = 1;";
$link->query($sql);


$sql = "select Doctor_ID ,NAME from Doctors;";
$result = $link->query($sql);


if ($result->num_rows > 0) {
    // output data of each rows
    while($row = $result->fetch_assoc()) {
        // echo $row[];
        echo "\nid: ". $row["Doctor_ID"]."\n". $row['NAME'];
    }
} else {
    echo "0 results";
}
?>
