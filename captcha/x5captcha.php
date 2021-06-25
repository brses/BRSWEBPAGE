<?php
include("../res/x5engine.php");
$nameList = array("87j","eht","mdc","y2g","t7n","ggn","w3w","zfn","swv","ydr");
$charList = array("2","3","W","V","E","R","K","A","E","P");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
