<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Your Name', @$_POST['imObjectForm_47_1'], '', false);
	$form->setField('Your E-mail', @$_POST['imObjectForm_47_2'], '', false);
	$form->setField('Your Phone', @$_POST['imObjectForm_47_3'], '', false);
	$form->setField('Message', @$_POST['imObjectForm_47_4'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '3ADC14875A0AFBAAC46BFAFBEDA866C6' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$db = getDbData('i13lbmn1');
		if (!$db)
			die("Cannot find db");
		$db = ImDb::from_db_data($db);		if (!$form->saveToDb($db, 'Messages_from_webpage'))
			die("Unable to connect to db");
		$form->mailToOwner('support@brses.com.np', 'support@brses.com.np', 'Notification from ' . $imSettings['general']['url'] . '', '', true);
		@header('Location: ../home.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file