<?php
include("../res/x5engine.php");
$nameList = array("pp7","77z","wsp","wfs","wcs","a8h","sxr","62d","yxf","m4z");
$charList = array("K","M","H","U","6","4","J","A","7","4");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
