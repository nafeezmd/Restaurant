/**
 * 
 */
(function() {
  'use strict';

  angular
    .module('plunker')
    .controller('ownerCtrl', ownerController);

  ownerController.$inject = ['$scope', 'dataService'];

  function ownerController(scope, dataService) {
    var ownerVm = this;
    
    ownerVm.allReservations =[];
    
    dataService.getAllReserv().then(function(data) {
		ownerVm.allReservations = data.payload;
    	console.log(data.payload);
    }, function(err) {
      console.log(err);
    });
    
    
    
  }

})();