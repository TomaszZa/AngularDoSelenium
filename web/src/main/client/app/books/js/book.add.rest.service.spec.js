describe('book add rest service', function () {
	'use strict';
  var bookAddRestService,
      httpBackend;
  
  beforeEach(function (){  

      module('app.main');
      module('flash');
      module('app.books');

    inject(function($httpBackend, _bookAddRestService_) {
      bookAddRestService = _bookAddRestService_;      
      httpBackend = $httpBackend;
    });
  });
  
  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should get respond when call URL', inject(function (currentContextPath){

    var returnData = {status: 200};

    httpBackend.expectPOST(currentContextPath.get() + 'rest/books/book').respond(returnData);
    
    var returnedPromise = bookAddRestService.addBook();
    
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });
    
    httpBackend.flush();
    
    expect(result.data).toEqual(returnData);
  }));  
});