<?php
include("../res/x5engine.php");
$nameList = array("p6m","yp7","6jn","n5m","xcs","avx","zhc","46c","mvk","5nm");
$charList = array("A","H","T","2","T","3","P","2","4","J");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
