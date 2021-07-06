<?php
include("../res/x5engine.php");
$nameList = array("dms","s6a","5ap","7fd","sl4","sgg","ghd","n8f","unl","6tu");
$charList = array("R","G","U","3","L","G","C","N","3","U");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
