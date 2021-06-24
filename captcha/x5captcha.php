<?php
include("../res/x5engine.php");
$nameList = array("wmk","hfl","jyu","crg","778","x6j","yf3","a2f","54s","mmd");
$charList = array("J","U","D","Y","V","N","T","R","5","3");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
