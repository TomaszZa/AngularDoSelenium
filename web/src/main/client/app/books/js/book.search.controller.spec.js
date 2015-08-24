describe('book controller', function () {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('flash');
        module('app.books');
    });

    var $scope;
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    it('search is defined', inject(function ($controller) {
        // when
        $controller('BookSearchController', {$scope: $scope});
        // then
        expect($scope.search).toBeDefined();
    }));

    it('delete book should call bookService.deleteBook', inject(function ($controller, $q, bookService, Flash) {
        // given
        $controller('BookSearchController', {$scope: $scope});

        var bookId = 1;
        $scope.books = [{id: bookId, title: 'test'}];
        var deleteDeferred = $q.defer();
        spyOn(bookService, 'deleteBook').and.returnValue(deleteDeferred.promise);
        spyOn(Flash, 'create');
        // when
        $scope.deleteBook(bookId);
        deleteDeferred.resolve();
        $scope.$digest();
        // then
        expect(bookService.deleteBook).toHaveBeenCalledWith(bookId);
        expect(Flash.create).toHaveBeenCalledWith('success', 'Książka została usunięta.', 'custom-class');
        expect($scope.books.length).toBe(0);
    }));
    
        it('search book should found books with such prefix', inject(function ($controller, $q, bookService) {
        // given
        $controller('BookSearchController', {$scope: $scope});

        $scope.prefix = 't';

        var Deferred = $q.defer(); //tworzenie instancji saymulacji ukonczenia
        spyOn(bookService, 'search').and.returnValue(Deferred.promise);  //zwraca promisa w momencie wywolania tablicy
        // when
        $scope.search();
        Deferred.resolve({data: [{id: 1, title:'test'}]});  //zwraca wartosc za promisa
        $scope.$digest(); //odpala $watch() aby zarejestrowac zmiany ng-click itd robia to automatycznie
        // then
        expect(bookService.search).toHaveBeenCalledWith($scope.prefix);
        expect($scope.books.title).toBe('test');
        expect($scope.books.length).toBe(1);
    }));
    
});
