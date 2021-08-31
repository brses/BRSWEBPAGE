<?php
include("../res/x5engine.php");
$nameList = array("pzx","wvg","pmd","g8v","jnt","ynn","kwc","k5s","mn7","p46");
$charList = array("R","C","6","W","Y","V","Z","K","X","G");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
