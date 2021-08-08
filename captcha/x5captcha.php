<?php
include("../res/x5engine.php");
$nameList = array("ztn","r8u","4dz","csd","uvm","v7u","h5m","hxw","uvj","rur");
$charList = array("8","8","U","F","L","E","A","N","4","4");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
