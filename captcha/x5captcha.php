<?php
include("../res/x5engine.php");
$nameList = array("7gm","cpr","gn3","u5l","rra","6x5","wjs","k65","sgd","mxr");
$charList = array("Y","N","3","H","Y","H","K","N","L","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
