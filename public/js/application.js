var app = angular.module('cardsApp', [])
.constant('API_URL', 'http://localhost:8000/api/cards');

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});
