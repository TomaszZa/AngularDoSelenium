angular.module('app.books').controller('BookAddController', function ($scope,$modal,bookAddService,Flash) {
    'use strict';

    $scope.books = [];
    $scope.gridOptions = { data: 'books' };
    $scope.title = '';
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.authors = [];
    $scope.AuthApperiance;
           
        var addingBook = function (book) {
                $scope.books.push(book);       
        };
    

        $scope.addAuthor = function () {
    
        $modal.open({
            templateUrl: 'books/html/book-authors.html',
            controller: 'BookModalController',
            size: 'lg'
        }).result.then(function (response){
        $scope.authors.push(response);
        });
    
        };
       
    
        $scope.addBooks = function () {         
           var book = {
             title : $scope.title,
             authors : $scope.authors
           }
           bookAddService.addBook(book).then(function (){ 
             addingBook(book);
             $scope.authors = [];
             Flash.create('success', 'Książka została dodana.', 'custom-class');
           });  
        };
    
   
});
