<?php
include("../res/x5engine.php");
$nameList = array("c5w","u5x","el7","62z","6ag","nwz","rrf","54z","ysn","4su");
$charList = array("P","X","A","X","M","C","5","C","D","R");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
