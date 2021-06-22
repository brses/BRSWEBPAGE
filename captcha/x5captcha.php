<?php
include("../res/x5engine.php");
$nameList = array("psv","5n3","tkz","fxm","swv","k5m","xjx","g5l","rug","eal");
$charList = array("Z","8","V","Y","T","D","D","R","Y","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
