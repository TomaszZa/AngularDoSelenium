angular.module('app.books').factory('bookRestService', function ($http, currentContextPath) {
    'use strict';

    return {
        search: function (titlePrefix) {
         console.log(currentContextPath.get());
            return $http.get(currentContextPath.get() + 'rest/books-by-title', {params: {titlePrefix: titlePrefix}});
        },
        deleteBook: function (bookId) {
            return $http.delete(currentContextPath.get() + 'rest/book/' + bookId);
        },
        addBook: function (book) {
            return $http.post(currentContextPath.get() + 'rest/book',{params: {book: book}}); 
        }
    };
});