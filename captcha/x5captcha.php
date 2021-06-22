<?php
include("../res/x5engine.php");
$nameList = array("npp","jln","fkr","gfm","nng","wav","jpw","at3","rrg","tna");
$charList = array("G","Z","X","C","S","S","V","X","M","Y");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
