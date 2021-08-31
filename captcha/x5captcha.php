<?php
include("../res/x5engine.php");
$nameList = array("d2j","kxd","gas","pf6","l8l","zrf","5hy","kkn","gsh","xpe");
$charList = array("V","V","R","D","K","X","5","Y","J","S");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
