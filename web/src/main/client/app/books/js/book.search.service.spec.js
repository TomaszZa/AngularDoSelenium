describe('My part of book search Service tests', function (){
	'use strict';

  
  beforeEach(function (){
    
      module('app.main');
      module('flash');
      module('app.books');
      
  });
     
  it('should have an addBook function', inject(function (bookService) { 
    expect(angular.isFunction(bookService.addBook)).toBe(true);
  }));
  
  // check to see if it does what it's supposed to do.
  it('should make a responso from db', inject(function (bookRestService,bookService){

	spyOn(bookRestService, 'addBook');
	bookService.addBook();
    expect(bookRestService.addBook).toHaveBeenCalled();
  }));
});