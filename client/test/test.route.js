(function(){
  'use strict';

  angular.module('App.test')
    .config(config);

    function config($routeProvider){
      console.log('ciao');
      $routeProvider
        .when('/test', {
          templateUrl: 'view/test/test.template.html',
          controller: 'TestController',
          controllerAs : 'vm'

        })
    }

})();
