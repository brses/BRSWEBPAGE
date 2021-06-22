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
		$form->mailToOwner('Support@brses.com.np', 'Support@brses.com.np', 'From Webpage', '', true);
		@header('Location: ../index.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file