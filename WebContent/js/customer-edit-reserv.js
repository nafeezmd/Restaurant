/**
 * Created by ABDULNAFEEZ on 8/26/2015.
 */

(function() {
    'use strict';

    angular
        .module('plunker')
        .controller('customerEditCtrl', customerEditCtrl);

    customerEditCtrl.$inject = ['$scope', 'dataService', '$routeParams', '$rootScope'];

    function customerEditCtrl($scope, dataService, $routeParams, $rootScope) {
        var customerEditVm = this;

        console.log("CustomerEditCtrl received" + $routeParams.confirmationNum);


        var loadEditDetails;
        $scope.users = [];


        function init(){
            loadEditDetails();
        };

        loadEditDetails = function(){
            dataService.getStatus($routeParams.confirmationNum).then(function(data) {
                console.log("Payload" + data.payload);
                customerEditVm.editReservationObj = data.payload;
                console.log("Retrieved obj from URL to edit: "+ customerEditVm.editReservationObj.name);
                console.log("Date substring is: " + customerEditVm.editReservationObj.reservationTime.substring(11, 19));
                customerEditVm.date = customerEditVm.editReservationObj.reservationTime.substring(0, 10);
                customerEditVm.time = customerEditVm.editReservationObj.reservationTime.substring(11, 19);

            }, function(err) {
                console.log(err);
            });
        };

        init();

        $scope.myeditfunc = function(){
            console.log("Inside my edit function ctrl");
        };

    }
})();