<!DOCTYPE html>
<html lang="de" class="no-js {{ $currentPage->slug }}">
<head>
    <meta charset="UTF-8">
    <title>{{ $sitename }} | @yield('title') </title>

    <meta name="description" content="{{ $currentPage->description }}">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
    <meta http-equiv="cleartype" content="on">

    <meta name="theme-color" content="#2F3BA2">

    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/touch/apple-touch-icon-144x144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/touch/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/touch/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="img/touch/apple-touch-icon-57x57-precomposed.png">
    <link rel="shortcut icon" sizes="196x196" href="img/touch/touch-icon-196x196.png">
    <link rel="shortcut icon" href="img/touch/apple-touch-icon.png">

    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="img/touch/apple-touch-icon-144x144-precomposed.png">
    <meta name="msapplication-TileColor" content="#222222">

    <!-- Add to homescreen for Chrome on Android -->
        <!--
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="application-name" content="Web Starter Kit">
    -->

    <!-- For iOS web apps. Delete if not needed. https://github.com/h5bp/mobile-boilerplate/issues/94 -->
        <!--
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="">
    -->

    <!-- This script prevents links from opening in Mobile Safari. https://gist.github.com/1042026 -->
        <!--
        <script>(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")</script>
    -->

    <!-- build:js1 /assets/js/modernizr.js -->
        <script src="/assets/js/modernizr.js"></script>
    <!-- endbuild -->

    <!-- build:css /assets/styles/styles.css -->
        <link rel="stylesheet" href="/assets/styles/normalize.css">
        <link rel="stylesheet" href="/assets/styles/styles.css">
    <!-- endbuild -->
</head>
<body>

        @include('layout.header')
        @include('layout.content')
		@include('layout.footer')


    <!-- build:js2 /assets/js/scripts.js -->
		<script src="/assets/js/bundle.js"></script>
	<!-- endbuild -->
	</body>
</html>