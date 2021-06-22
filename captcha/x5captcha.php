<?php
include("../res/x5engine.php");
$nameList = array("r8z","zzs","frz","4fw","2t6","zls","jt5","e2y","w3a","au6");
$charList = array("8","G","M","M","C","A","5","6","K","D");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
