<?php

// Users data
$imSettings['access']['users'] = array(
	'support@brses.com.np' => array(
		'id' => 'hf1z67cl',
		'groups' => array('m4uwoqpp'),
		'firstname' => 'B.R.S. Engineering',
		'lastname' => 'Service',
		'password' => '$2a$11$4uwRIypNH1rbRKxCaVm0NeLZpb0hogzBp29xzP8DpmQHlCl4n2sR2',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => false
	),
	'manoj.tripathi@brses.com.np' => array(
		'id' => 'v3f4a1fj',
		'groups' => array('wcsn1mxf'),
		'firstname' => 'Manoj',
		'lastname' => 'Tripathi',
		'password' => '$2a$11$CEK1YiSvCAMmWfhqZ3j.5.K47ZRIsOR9zwvqMFVNEFuqRaowcP/5K',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => 'index.html'
	)
);

// Admins list
$imSettings['access']['admins'] = array('hf1z67cl');

// Page/Users permissions
$imSettings['access']['pages'] = array(
	'9' => array('v3f4a1fj')
);

// PASSWORD CRYPT

$imSettings['access']['password_crypt'] = array(
	'encoding_id' => 'php_default',
	'encodings' => array(
		'no_crypt' => array(
			'encode' => function ($pwd) { return $pwd; },
			'check' => function ($input, $encoded) { return $input == $encoded; }
		),
		'php_default' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_DEFAULT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		),
		'csharp_bcrypt' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_BCRYPT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		)
	)
);

// End of file access.inc.php