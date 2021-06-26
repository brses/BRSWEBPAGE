<?php
include("../res/x5engine.php");
$nameList = array("4lm","v5n","lh5","cej","ly8","tcx","ttl","cy7","wym","fxp");
$charList = array("W","W","6","W","X","7","6","6","8","5");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
