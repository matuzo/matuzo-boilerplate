<?php
	$sitename = "PROJECT";

	const ENV = 'dev';

	if(ENV === 'dev') {
		$siteUrl = "http://localhost:3000";
	} else {
		$siteUrl = "http://";
	}

	date_default_timezone_set('Europe/Vienna'); 

	$pages = [
		"home" => ["menuname" => "Home", "menu" => "main", "file" => "home"],
	];
	$page = 'home';

	if(isset($_GET['page'])) {
		$page = $_GET['page'];

		if(isset($_GET['category'])) {
			$page = $_GET['page'].'/'.$_GET['category'];
		}
	}

	$errormessages[] = '';