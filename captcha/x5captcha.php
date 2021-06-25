<?php
include("../res/x5engine.php");
$nameList = array("ph5","v7m","uye","tnw","uge","58j","lsj","gjt","zjj","kvz");
$charList = array("H","5","V","F","J","S","G","Z","3","T");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
