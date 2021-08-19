<?php
include("../res/x5engine.php");
$nameList = array("5jz","j6l","zge","545","gnl","l3s","hf4","afm","h38","s6s");
$charList = array("S","Z","H","G","K","T","U","J","N","X");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
