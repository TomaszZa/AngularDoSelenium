angular.module('app.authors').controller('AuthorSearchController', function ($scope,$modal, $window, $location, authorService, Flash) {
    'use strict';

    $scope.authors = [];
    $scope.gridOptions = { data: 'books' };
    $scope.prefix = '';
    //$filter('filter') //wystarczy w html(zamiennie)
    
    $scope.searchAuthors = function () {
    	authorService.searchAuthors().then(function (response) {
            angular.copy(response.data, $scope.authors);
        }, function () {
            Flash.create('danger', 'Wyjątek', 'custom-class');
        });
    };

});
