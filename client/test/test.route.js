(function(){
  'use strict';

  angular.module('App.test')
    .config(config);

    function config($routeProvider){
      console.log('miao');
      $routeProvider
        .when('#/miao', {
          templateUrl: 'view/client/test/test.template.html'
        })
    }

});
