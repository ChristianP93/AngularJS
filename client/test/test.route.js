(function(){
  'use strict';

  angular.module('App.test')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/test', {
          templateUrl: 'view/test/template/test.template.html',
          controller: 'TestController',
          controllerAs : 'vm'
        })
        .when('/test/edit/:id',{
          templateUrl: 'view/test/template/testEdit.template.html',
          controller: 'TestController',
          controllerAs : 'vm'
        })
    }

})();
