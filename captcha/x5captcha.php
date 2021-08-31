<?php
include("../res/x5engine.php");
$nameList = array("paz","l48","p6z","6rn","7vd","zpk","l7h","dww","gzs","skm");
$charList = array("N","2","3","3","J","7","C","V","D","G");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
