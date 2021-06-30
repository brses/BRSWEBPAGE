<?php
include("../res/x5engine.php");
$nameList = array("mp3","24p","swu","svl","55t","wj3","2n6","4au","2kx","zdc");
$charList = array("R","5","F","E","P","R","M","P","6","2");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
