@extends('layouts.app')

@section('content')
<div class="container" ng-controller="cardsController">
    <ul>
        <li ng-repeat="card in cards"><% card.name %></li>
    </ul>
</div>
@endsection
