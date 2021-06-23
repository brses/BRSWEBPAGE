<?php
include("../res/x5engine.php");
$nameList = array("8s7","ppy","zh4","cu2","s7e","dr8","dr4","rnk","pyf","g4v");
$charList = array("R","V","F","J","W","M","A","R","W","W");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
