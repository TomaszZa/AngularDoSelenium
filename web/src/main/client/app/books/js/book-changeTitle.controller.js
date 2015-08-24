angular.module('app.books').controller('BookChangeTitleController', function ($scope,Flash,$modalInstance) {
    'use strict';

    $scope.newTitle = '';
                 
    $scope.makeNewTitle = function () {    
        Flash.create('success', 'Nowy tytul dodany.', 'custom-class');
        $modalInstance.close($scope.newTitle);
        };     
});
