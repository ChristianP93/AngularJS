(function(){
  'use strict';

  angular.module('Stream.home')
    .route(config);

    function config($routeProvider){
      $routeProvider
        .when('/home', {
          templateUrl : ' view/client/home/template/home.template.html',
          // controller : 'AnimaController',
          controllerAs : 'vm'
        });
    };

})();
