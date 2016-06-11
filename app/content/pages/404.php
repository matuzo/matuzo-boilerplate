<?php
	$currentPage = new stdClass();
	$currentPage->title = "Seite leider nicht gefunden";
	$currentPage->description = "Seite leider nicht gefunden";
	$currentPage->slug = '404';

	print $blade->view()->make('pages/404')->with([
														'currentPage' => $currentPage, 
														'sitename' => $sitename,
														'pages' => $pages,
														'siteUrl' => $siteUrl,
														])->render();
?>