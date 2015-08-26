angular.module('app.authors', ['ngRoute']).config(function ($routeProvider) {
    'use strict';
    $routeProvider.when('/authors/author-list', {
        templateUrl: 'authors/html/author-list.html',
        controller: 'AuthorSearchController'
    });
});
//.filter('prefixFiltr', function () { 
//	
//    return function (text) {
//    	if(text.indexOf(prefix) != -1){
//        return text;
//    	}else{
//    		return null;
//    	}
//    		
//    };    
//});