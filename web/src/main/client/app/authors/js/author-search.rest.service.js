angular.module('app.authors').factory('authorRestService', function ($http, currentContextPath) {
    'use strict';

    return {
        searchAuthors: function () {
            return $http.get(currentContextPath.get() + 'rest/authors/author'); 
        }
    };
});
