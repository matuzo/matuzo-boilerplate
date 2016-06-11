<?php
	$currentPage = new stdClass();
	$currentPage->title = "Home";
	$currentPage->description = "Die Startseite";
	$currentPage->slug = 'home';

	print $blade->view()->make('pages/home')->with([
														'currentPage' => $currentPage, 
														'sitename' => $sitename,
														'pages' => $pages,
														'siteUrl' => $siteUrl,
														])->render();
?>