/**
 * 
 */
(function(){
  'use strict';
  
  angular
    .module('plunker', ['ngRoute', 'ngMessages'])
    .config(moduleConfig);
    
    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
      $routeProvider
        .when('/reserv', {
          templateUrl: 'templates/reserv-tmpl.html',
          controller: 'reservCtrl',
          controllerAs: 'reservVm'
        })
//        .when('/home', {
//          templateUrl: 'templates/home.html'
//        })
//        .when('/', {
//          templateUrl: 'templates/reserv-tmpl.html',
//          controller: 'reservCtrl',
//          controllerAs: 'reservVm'
//        })
        .when('/make_reservation', {
          templateUrl: 'templates/zarina-make-reserv.html',
          controller: 'makeReservCtrl',
          controllerAs: 'makeReserVm'
        })
        
        .when('/check_status', {
          templateUrl: 'templates/check-status.html',
          controller: 'checkStatusCtrl',
          controllerAs: 'checkStatusVm'
        })
        
        .when('/owner_login', {
          templateUrl: 'templates/owner-login.html'
        })
        
		.when('/owner/view-reservations', {
			templateUrl: 'templates/owner/owner-show-reserv.html',
			controller: 'ownerCtrl',
			controllerAs: 'ownerVm'
		})
		
		.when('/view-profile', {
		templateUrl: 'templates/owner/owner-rest-profile.html'
		})
		
		.when('/view-seating', {
		templateUrl: 'templates/owner/owner-seating-area.html'
		})
		
		.when('/new-reservation', {
		templateUrl: 'templates/owner/owner-new-reserv.html'
		})
//        .when('/reserv/:reservid', {
//          templateUrl: 'reserv-profile-tmpl.html',
//          controller: 'reservProfileCtrl',
//          controllerAs: 'reservprofileVm'
//        })
//        .when('/restaurant', {
//          templateUrl: 'restaurant-tmpl.html',
//          controller: 'restaurantCtrl',
//          controllerAs: 'restaurantVm'
//        })
        .otherwise({
          redirectTo: '/make_reservation'
        });
    }


//    $('#checkStatus').click(function(){
//		$.ajax({
//			url: 'api/user/get',
//			type: 'GET',
//			error: function(error){
//				console.log(error);
//			},
//			success: function(data){
//				console.log(data);
//			}
//		})
//	});

})();
