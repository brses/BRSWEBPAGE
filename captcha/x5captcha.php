<?php
include("../res/x5engine.php");
$nameList = array("t27","tum","nrl","v43","ngg","3d7","dw3","zl5","zty","k2p");
$charList = array("2","Z","G","Y","K","E","U","D","H","V");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
