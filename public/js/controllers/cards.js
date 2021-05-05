
app.controller('cardsController', function ($scope, $http, API_URL) {
    //fetch customers listing from 
    $http({
        method: 'GET',
        url: API_URL
    }).then(function (response) {
        $scope.cards = response.data.data;
    }, function (error) {
        console.log(error);
        alert('This is embarassing. An error has occurred. Please check the log for details');
    });
});