/**
 * 
 */
(function() {
  'use strict';

  angular
    .module('plunker')
    .controller('checkStatusCtrl', checkStatusController);

  checkStatusController.$inject = ['$scope', 'dataService'];

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
    
  }

})();