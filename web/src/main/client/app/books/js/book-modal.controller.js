angular.module('app.books').controller('BookModalController', function ($scope,Flash,$modalInstance) {
    'use strict';

    $scope.authorTo = '';
    $scope.firstName = '';
    $scope.lastName = '';
   
        var createAuthors = function () {
           var AuthorTo = {
             firstName : $scope.firstName,
             lastName : $scope.lastName
           };  
            $scope.authorTo = AuthorTo;            
        };
        
         
   
    $scope.makeAuthor = function () {    
        createAuthors();
        Flash.create('success', 'Autor dodany.', 'custom-class');
       $modalInstance.close($scope.authorTo);
        };     
});
