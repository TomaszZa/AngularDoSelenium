describe('author controller', function () {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('flash');
        module('app.authors');
    });

    var $scope;
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new(); //tworzenie nowego $scope
    }));

    it('searchAuthors is defined', inject(function ($controller) {
        // when
        $controller('AuthorSearchController', {$scope: $scope});
        // then
        expect($scope.searchAuthors).toBeDefined();
    }));
    
        it('search Authors should found all Authors', inject(function ($controller, $q, authorService) {
        // given
        $controller('AuthorSearchController', {$scope: $scope});


        var deferred = $q.defer(); //tworzenie instancji saymulacji ukonczenia
        spyOn(authorService, 'searchAuthors').and.returnValue(deferred.promise);  //zwraca promisa w momencie wywolania tablicy
        // when
        $scope.searchAuthors();
        deferred.resolve({data: [{firstName: 'first', lastName:'last'}]});  //zwraca wartosc za promisa
        $scope.$digest(); //odpala $watch() aby zarejestrowac zmiany ng-click itd robia to automatycznie
        // then
        expect(authorService.searchAuthors).toHaveBeenCalled();
        expect($scope.authors[0].firstName).toBe('first');
        expect($scope.authors.length).toBe(1);
    }));    
});
