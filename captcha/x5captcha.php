<?php
include("../res/x5engine.php");
$nameList = array("6hs","vr8","ehc","kx8","gxe","zhp","z77","yeu","dsm","shs");
$charList = array("P","U","T","3","F","S","7","N","N","R");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
