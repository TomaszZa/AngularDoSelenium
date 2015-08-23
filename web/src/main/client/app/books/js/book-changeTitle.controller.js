angular.module('app.books').controller('BookModalController', function ($scope,Flash,$modalInstance) {
    'use strict';

    //$scope.authors = [];
    $scope.authorTo;
    $scope.firstName = '';
    $scope.lastName = '';
    
    setInterval(function (){
       if($scope.firstName.length == 0 || $scope.lastName.length == 0){
                 document.getElementById("DodAuth").disabled = true;
       }
       else{
                 document.getElementById("DodAuth").disabled = false;
       }
    }
    ,1000); //wywoluje funckje co 1000 ms Czemu nie dziala ?
   
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
