/**
 * 
 */
(function() {
  'use strict';

  angular
    .module('plunker')
    .controller('checkStatusCtrl', checkStatusController);

  checkStatusController.$inject = [$scope, 'dataService'];

  function checkStatusController($scope, dataService) {
    var checkStatusVm = this;

    checkStatusVm.name = "Angular";
    console.log('check-status-controller');

    dataService.title = 'reservCtrl has updated it';
   
    console.log(dataService);
 
    $scope.check = function(confirmationNumb){
    	dataService.getStatus(confirmationNumb).then(function(data) {
        	console.log("Payload" + data.payload);
        	checkStatusVm.reservation = data.payload;
        }, function(err) {
          console.log(err);
        });
    }
    
    checkStatusVm.customerEditReserv = function(reserv){
      console.log("Check status ctrl received obj: " + reserv.name);
    }


    //$scope.editCustomerReservation = function(customerEditObj){
    //  customerEditObj.reservationTime = customerEditVm.date + " " + customerEditVm.time;
    //
    //  console.log("inside customer edit reservation"+customerEditObj.name);
    //
    //  dataService.updateCustomerReserv(editReservObj).then(function(data){
    //    console.log("Received success from updateCustomerReserv ($updateCustomerReserv) service");
    //  }, function(error){
    //    console.log(error);
    //  });
    //}

    console.log('here');
  }

})();