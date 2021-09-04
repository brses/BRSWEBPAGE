<?php
include("../res/x5engine.php");
$nameList = array("nkj","snv","p8n","7j8","6e7","mx3","433","3kl","c82","vkl");
$charList = array("P","4","W","J","Y","P","H","K","D","R");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
