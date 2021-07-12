<?php
include("../res/x5engine.php");
$nameList = array("dfp","yvd","378","cu2","j7a","5n3","u7a","hjh","vjx","xh5");
$charList = array("W","R","N","C","J","R","A","F","7","X");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
