(function() {
  'use strict';

  var Stream = angular
  .module('Stream', [
    // vendors libs
    // 'ngRoute',

  ]);

  Stream.config(config);

  function config( $routeProvider){
    $routeProvider.otherwise({
      redirectTo: function() {
        window.location = '#/home'
      }
    });
   };

})();
