describe('book add Service tests', function (){
	'use strict';

  
  beforeEach(function (){
    

      module('app.main');
      module('flash');
      module('app.books');
      
  });
     
  it('should have an addBook function', inject(function (bookAddService) { 
    expect(angular.isFunction(bookAddService.addBook)).toBe(true);
  }));
  
  // check to see if it does what it's supposed to do.
  it('should make a responso from db', inject(function (bookAddRestService,bookAddService){

	spyOn(bookAddRestService, 'addBook');
	bookAddService.addBook();
    expect(bookAddRestService.addBook).toHaveBeenCalled();
  }));
});