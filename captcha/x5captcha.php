<?php
include("../res/x5engine.php");
$nameList = array("4ee","me3","2cp","7zj","2g5","n4g","d8u","rsy","g6l","yv5");
$charList = array("2","J","W","R","E","2","5","L","C","2");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
