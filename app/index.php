<?php
	require '../vendor/autoload.php';
	
	use Philo\Blade\Blade;

	$views = __DIR__ . '/content/views';
	$cache = __DIR__ . '/content/cache';
	$blade = new Blade($views, $cache);

	require 'config.php';
	require 'functions.php';

	if(array_key_exists($page, $pages)):
		include 'content/pages/'.$pages[$page]['file'].'.php';
	else:
		include 'content/pages/404.php';
	endif;