@extends('master')

@section('title', $currentPage->title)

@section('content')

	{{ $currentPage->description }}

@endsection