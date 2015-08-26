angular.module('app.authors').factory('authorService', function (authorRestService) {
    'use strict';

    return {
    	searchAuthors: function () {
            return authorRestService.searchAuthors();
        }
    };
});
