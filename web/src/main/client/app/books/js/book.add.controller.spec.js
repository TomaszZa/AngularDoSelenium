describe('book Add controller', function () {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('flash');
        module('app.books');
    });

    var $scope;
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new(); //tworzenie nowego $scope
    }));
   
        it('search book should found books with such prefix', inject(function ($controller, $q, bookAddService,Flash) {
        // given
        $controller('BookAddController', {$scope: $scope});

        var book = {title : 'Title', authors : 'Author'};

        var Deferred = $q.defer(); //tworzenie instancji saymulacji ukonczenia
        spyOn(bookAddService, 'addBook').and.returnValue(Deferred.promise);  //zwraca promisa w momencie wywolania tablicy
        spyOn(Flash, 'create');
        // when
        $scope.addBooks();
        Deferred.resolve(book);  //zwraca wartosc za promisa
        $scope.$digest(); //odpala $watch() aby zarejestrowac zmiany ng-click itd robia to automatycznie
        // then
        //expect(bookAddService.addBook).toHaveBeenCalledWith(book);  //<<<< JAK ?
        //expect($scope.books[0].title).toBe('Title');
        expect($scope.books.length).toBe(1);   //<< co tu jest jak nie book moje ?
        
        expect(Flash.create).toHaveBeenCalledWith('success', 'Książka została dodana.', 'custom-class');
    }));        
});
