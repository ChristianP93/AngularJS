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


//# sourceMappingURL=build/streamApp/bundle.js.map
