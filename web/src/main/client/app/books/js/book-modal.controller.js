angular.module('app.books').controller('BookModalController', function ($scope,Flash,$modalInstance) {
    'use strict';

    //$scope.authors = [];
    $scope.authorTo;
   
        var createAuthors = function () {
           var AuthorTo = {
             firstName : $scope.firstName,
             lastName : $scope.lastName
           }
            //$scope.authors.push(AuthorTo);   
            $scope.authorTo = AuthorTo;            
        };
        
         
   
    $scope.makeAuthor = function () {    
        createAuthors();
        Flash.create('success', 'Autor dodany.', 'custom-class');
       // $modalInstance.close($scope.authors);
       $modalInstance.close($scope.authorTo);
        };     
});
