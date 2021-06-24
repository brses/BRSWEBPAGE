<?php

/*
|-------------------------------
|	GENERAL SETTINGS
|-------------------------------
*/

$imSettings['general'] = array(
	'site_id' => '1C0279378894A5033768886E77B6A3A9',
	'url' => 'https://brses.com.np/',
	'homepage_url' => 'https://brses.com.np/index.html',
	'icon' => 'https://brses.com.np/favImage.png',
	'version' => '2021.2.5.0',
	'sitename' => 'B.R.S. Engineering Service',
	'lang_code' => 'en-GB',
	'public_folder' => '',
	'salt' => 'vj1mmk1j8usl67daf6mht73fu0p6y4h5dr6jes44x5boznco',
	'use_common_email_sender_address' => false,
	'common_email_sender_addres' => ''
);
/*
|-------------------------------
|	PASSWORD POLICY
|-------------------------------
*/

$imSettings['password_policy'] = array(
	'required_policy' => false,
	'minimum_characters' => '6',
	'include_uppercase' => false,
	'include_numeric' => false,
	'include_special' => false
);
/*
|-------------------------------
|	Captcha
|-------------------------------
*/ImTopic::$captcha_code = "		<div class=\"x5captcha-wrap\">
			<label for=\"zhlh8iti-imCpt\">Check word:</label><br />
			<input type=\"text\" id=\"zhlh8iti-imCpt\" class=\"imCpt\" name=\"imCpt\" maxlength=\"5\" />
		</div>
";


$imSettings['admin'] = array(
	'icon' => 'admin/images/logo_yjaw2r57.png',
	'notification_public_key' => 'f7ea75fb52923b95',
	'notification_private_key' => 'f096a124fc3205f8',
	'enable_manager_notifications' => true,
	'theme' => 'orange',
	'extra-dashboard' => array(),
	'extra-links' => array()
);


/*
|--------------------------------------------------------------------------------------
|	DATABASES SETTINGS
|--------------------------------------------------------------------------------------
*/

$imSettings['databases'] = array();
$ecommerce = Configuration::getCart();
// Setup the coupon data
$couponData = array();
$couponData['products'] = array();
// Setup the cart
$ecommerce->setPublicFolder('');
$ecommerce->setCouponData($couponData);
$ecommerce->setSettings(array(
	'page_url' => 'https://brses.com.np/',
	'force_sender' => false,
	'mail_btn_css' => 'display: inline-block; text-decoration: none; color: rgba(64, 64, 64, 1); background-color: rgba(229, 79, 43, 1); padding: 15px 33px 15px 33px; border-style: solid; border-width: 0px 0px 0px 0px; border-color: rgba(55, 71, 79, 1) rgba(55, 71, 79, 1) rgba(55, 71, 79, 1) rgba(55, 71, 79, 1); border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;',
	'email_opening' => 'Dear Customer,<br /><br />Thank you for your order. We remind you that we are waiting for your payment.<br /><br />Below you will find the list of the products you have ordered, the billing and shipping details and the instructions to complete the payment.',
	'email_closing' => 'Please contact us if you need further information.<br /><br />Best Regards, our Sales Staff.',
	'email_payment_opening' => 'Dear Customer,<br /><br />Thank you for your purchase. We confirm that we have correctly received your payment and that the order will be processed as soon as possible.<br /><br />Below you will find the list of the products you have ordered, the billing and shipping details.',
	'email_payment_closing' => 'Please contact us if you need further information.<br /><br />Best Regards, our Sales Staff.',
	'email_digital_shipment_opening' => 'Dear Customer,<br />Thank you for your purchase.<br />Please find attached the list of download links for the products you have ordered:',
	'email_digital_shipment_closing' => 'Please contact us if you need further information.<br /><br />Best Regards, our Sales Staff.',
	'email_physical_shipment_opening' => 'Dear Customer,<br />Thank you for your purchase.<br />Please find attached the list of products that have been sent to you:',
	'email_physical_shipment_closing' => 'Please contact us if you need further information.<br /><br />Best Regards, our Sales Staff.',
	'sendEmailBeforePayment' => true,
	'sendEmailAfterPayment' => false,
	'useCSV' => false,
	'header_bg_color' => 'rgba(37, 58, 88, 1)',
	'header_text_color' => 'rgba(255, 255, 255, 1)',
	'cell_bg_color' => 'rgba(255, 255, 255, 1)',
	'cell_text_color' => 'rgba(0, 0, 0, 1)',
	'availability_reduction_type' => 1,
	'border_color' => 'rgba(211, 211, 211, 1)',
	'owner_email' => 'example@example.com',
	'vat_type' => 'included',
	'availability_image' => ''
));

$ecommerce->setPriceFormatData(array(
	'decimals' => 2,
	'decimal_sep' => '.',
	'thousands_sep' => '',
	'currency_to_right' => true,
	'currency_separator' => ' ',
	'show_zero_as' => '0',
	'currency_symbol' => '$',
	'currency_code' => 'USD',
	'currency_name' => 'United States of America, Dollars',
));

$ecommerce->setDigitalProductsData(array());
$ecommerce->setProductsData(array());
$ecommerce->setSlugToProductIdMap(array());
$ecommerce->setCategoriesData(array(
	'6pj0xwsw' => array(
		'id' => '6pj0xwsw',
		'name' => 'New Category',
		'containsProductsWithProductPage' => false,
		'products' => array(),
		'categories' => array()
	)
));
$ecommerce->setCommentsData(array(
	'enabled' => false,
	'type' => "websitex5",
	'db' => '',
	'table' => '',
	'prefix' => 'x5productPage_',
	'comment_type' => "commentandstars"
));
$ecommerce->setPaymentData(array(
	'8dkejfu5' => array(
		'id' => '8dkejfu5',
		'name' => 'Bank Transfer',
		'description' => 'Pay later with Bank Transfer.',
		'email_text' => 'The following data is required for payments via Bank Transfers:

XXX YYY ZZZ

Please note that once the payment is completed it is necessary to send a copy of the receipt along with the Order Number.',
		'enableAfterPaymentEmail' => false
	)));
$ecommerce->setShippingData(array(
	'j48dn4la' => array(
		'id' => 'j48dn4la',
		'name' => 'Mail',
		'description' => 'The goods will be delivered in 3-5 days.',
		'email_text' => 'Shipping by Mail.\\nThe goods will be delivered in 3-5 days.'
	),
	'hdj47dut' => array(
		'id' => 'hdj47dut',
		'name' => 'Express Delivery',
		'description' => 'The goods will be delivered in 1-2 days.',
		'email_text' => 'Shipping by Express Delivery.\\nThe goods will be delivered in 1-2 days.'
	)));

/*
|-------------------------------------------------------------------------------------------
|	GUESTBOOK SETTINGS
|-------------------------------------------------------------------------------------------
*/

$imSettings['guestbooks'] = array();

/*
|-------------------------------------------------------------------------------------------
|	Dynamic Objects SETTINGS
|-------------------------------------------------------------------------------------------
*/

$imSettings['dynamicobjects'] = array(	'template' => array(
),
	'pages' => array(

	));


/*
|-------------------------------
|	EMAIL SETTINGS
|-------------------------------
*/

$ImMailer->emailType = 'phpmailer';
$ImMailer->exposeWsx5 = true;
$ImMailer->header = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">' . "\n" . '<html>' . "\n" . '<head>' . "\n" . '<meta http-equiv="content-type" content="text/html; charset=utf-8">' . "\n" . '<meta name="generator" content="Incomedia WebSite X5 Professional 2021.2.5 - www.websitex5.com">' . "\n" . '</head>' . "\n" . '<body bgcolor="#000000" style="background-color: #000000;">' . "\n\t" . '<table border="0" cellpadding="0" align="center" cellspacing="0" style="padding: 0; margin: 0 auto; width: 700px;">' . "\n\t" . '<tr><td id="imEmailContent" style="min-height: 300px; padding: 10px; font: normal normal normal 9pt \'Quicksand\'; color: #000000; background-color: #FFFFFF; text-decoration: none; text-align: left; width: 700px; border-style: solid; border-color: #000000; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; background-color: #FFFFFF" width="700px">' . "\n\t\t";
$ImMailer->footer = "\n\t" . '</td></tr>' . "\n\t" . '</table>' . "\n" . '<table width="100%"><tr><td id="imEmailFooter" style="font: normal normal normal 7pt \'Quicksand\'; color: #FFFFFF; background-color: transparent; text-decoration: none; text-align: center;  padding: 10px; margin-top: 5px;background-color: transparent">' . "\n\t\t" . 'This e-mail contains information that is intended solely for the above mentioned addressee.<br>If you have received this e-mail by error, please notify the sender immediately and destroy it, without copying it.' . "\n\t" . '</td></tr></table>' . "\n\t" . '</body>' . "\n" . '</html>';
$ImMailer->bodyBackground = '#FFFFFF';
$ImMailer->bodyBackgroundEven = '#FFFFFF';
$ImMailer->bodyBackgroundOdd = '#F0F0F0';
$ImMailer->bodyBackgroundBorder = '#CDCDCD';
$ImMailer->bodyTextColorOdd = '#000000';
$ImMailer->bodySeparatorBorderColor = '#000000';
$ImMailer->emailBackground = '#000000';
$ImMailer->emailContentStyle = 'font: normal normal normal 9pt \'Quicksand\'; color: #000000; background-color: #FFFFFF; text-decoration: none; text-align: left; ';
$ImMailer->emailContentFontFamily = 'font-family: Quicksand;';

// End of file x5settings.php