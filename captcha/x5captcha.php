<?php
include("../res/x5engine.php");
$nameList = array("7cj","yza","7cs","5fr","wlp","kxn","gk5","gu4","vat","r6p");
$charList = array("L","7","6","R","R","A","L","5","A","H");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
