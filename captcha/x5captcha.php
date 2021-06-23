<?php
include("../res/x5engine.php");
$nameList = array("3r2","ksf","zgf","z25","flp","knd","x5m","nhg","eu6","cky");
$charList = array("2","S","2","5","T","L","G","J","T","4");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
