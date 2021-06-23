<?php
include("../res/x5engine.php");
$nameList = array("mkh","gyc","3d8","s66","lxt","6wc","v3d","2ey","uu3","zr2");
$charList = array("S","P","7","V","7","Z","4","W","5","X");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
