describe('book modal controller', function () {
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
    
    it('makeAuthor is defined', inject(function ($controller) {
        // when
        $controller('BookModalController', {$scope: $scope,$modalInstance: $modalInstance});
        // then
        expect($scope.makeAuthor).toBeDefined();
    }));

    it('makeAuthor should make flash senstense Author Dodany and return object authorTo', inject(function ($controller, Flash) {
        // given
        $controller('BookModalController', {$scope: $scope, $modalInstance: $modalInstance});
        
        spyOn(Flash, 'create');
        // when
        $scope.makeAuthor();
        $scope.$digest();
        // then
        expect(Flash.create).toHaveBeenCalledWith('success', 'Autor dodany.', 'custom-class');
        expect($modalInstance.close).toHaveBeenCalledWith($scope.authorTo);
    }));

});