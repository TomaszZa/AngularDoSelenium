angular.module('app.books').factory('bookAddService', function (bookAddRestService) {
    'use strict';

    return {
        addBook: function (book) {
            return bookAddRestService.addBook(book);
        }
    };
});
