/**
 * 
 */
(function() {
  'use strict';

  angular
    .module('plunker')
    .controller('ownerAssignTableCtrl', ownerTableAssignCtrl);

  ownerTableAssignCtrl.$inject = ['dataService', '$scope', '$routeParams', '$rootScope'];

  function ownerTableAssignCtrl(dataService, $scope, $routeParams, $rootScope) {
	  var ownerAssignTableVm = this;
    
	
   ownerAssignTableVm.assignTableReservationObj = $rootScope.ownerSelectedObj;
   
   $scope.updateReservation = function(assignTableReservationObj){
	   
	   console.log("Inside ng-click update " + assignTableReservationObj.reservationStatus);
	   
	   dataService.updateReserv(assignTableReservationObj).then(function(data){
		   console.log("Received success from updateReserv service");
	   }, function(error){
		   console.log(error);
	   });
	   
   }
   
  }
  
  


})();