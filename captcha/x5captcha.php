<?php
include("../res/x5engine.php");
$nameList = array("zsa","sfh","es8","jwu","ed5","lms","zlc","ak5","sar","hu4");
$charList = array("A","4","A","U","C","8","6","V","G","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
