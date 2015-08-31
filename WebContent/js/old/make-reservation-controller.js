/**
 * 
 */
(function() {
  'use strict';

  angular
    .module('plunker')
    .controller('makeReservCtrl', makeReservationCtrl);

  makeReservationCtrl.$inject = [$scope, 'dataService'];

  function makeReservationCtrl($scope, dataService) {
    var makeReserVm = this;

    console.log('****************makeReservationCtrl****************');

//   
//    makeReserVm.addPerson = function(isFormValid) {
//         if (isFormValid) {
//        	 makeReserVm.newPerson.id = mainVm.people.length + 1;
//        	 makeReserVm.people.push(mainVm.newPerson);
//        	 makeReserVm.newPerson = null;
//         }
//         console.log(mainVm.newPerson)
//       }
//    
    
    console.log(dataService);
 
    $scope.createReserv = function(reservObj){
    	
    	console.log("Date from form: " + makeReserVm.date);
    	console.log("Name from form: " + reservObj.name);
    	console.log("Phone from form: " + reservObj.phone);
        console.log("TImeStamp now: " + Date.now());
    	reservObj.reservationTime = makeReserVm.date + " " + makeReserVm.time+":00";
    	reservObj.confirmationNum = reservObj.name.substring(0, 4) + Date.now();
    	makeReserVm.confirmationNumb = reservObj.name.substring(0, 4) + Date.now();
    	console.log("Time from form: " + makeReserVm.date + " " + makeReserVm.time+":00");
    	
    	dataService.makeReservation(reservObj).then(function(data) {
    		makeReserVm.confirmed = data.payload;
        	console.log("Payload in makereserv: " + data.payload.confirmationNum);
        }, function(err) {
          console.log(err);
        });
    }
  }

})();