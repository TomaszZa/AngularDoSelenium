describe('book changeTitle controller', function () {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('flash');
        module('app.books');
    });

    var $scope;
    var $modalInstance;
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new(); 
        $modalInstance = {                    // tworze mocka modalInstance za pomoca spy
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                  then: jasmine.createSpy('modalInstance.result.then')
                }
        };
    }));
    
    it('makeNewTitle is defined', inject(function ($controller) {
        // when
        $controller('BookChangeTitleController', {$scope: $scope,$modalInstance: $modalInstance}); //co do czego tu jest ? $scope: $scope
        // then                                                                                    //po czym dokladnie rozpoznaje ze to test
        expect($scope.makeNewTitle).toBeDefined();
    }));

    it('makeNewTitle should make flash senstense Nowy Tytul Dodany and return object newTitle', inject(function ($controller, Flash) {
        // given
        $controller('BookChangeTitleController', {$scope: $scope, $modalInstance: $modalInstance});
        
        spyOn(Flash, 'create');
        // when
        $scope.makeNewTitle();
        $scope.$digest();
        // then
        expect(Flash.create).toHaveBeenCalledWith('success', 'Nowy tytul dodany.', 'custom-class');
        expect($modalInstance.close).toHaveBeenCalledWith($scope.newTitle);
    }));

});