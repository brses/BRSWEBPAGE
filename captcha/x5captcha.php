<?php
include("../res/x5engine.php");
$nameList = array("7we","5zl","y8r","uvt","h3l","y8j","wet","guh","ttk","8e5");
$charList = array("5","P","6","L","V","P","4","F","7","Y");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
