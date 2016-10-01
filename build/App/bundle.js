(function(){
  'use strict';

  var App = angular.module('App',[
    'ngRoute',

    'App.test'

  ]);

 })();

(function(){
  'use strict';

  angular.module('App.test', [

  ]);

})();

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

(function(){

  'use strict';

  angular.module('App.test')
    .controller('TestController', TestController);

    TestController.$inject=['TestService'];

    function TestController(TestService){
      var vm = this;

      vm.nome = 'Christian';

      vm.saluta = function(){
        console.log('controller');
        return TestService.log(function(user){
          vm.user = user;
          console.log(vm.user);
        }, function(err){
          return err;
        });
      }
      // console.log(vm);
    }


})();

(function(){
  'use strict';

  angular.module('App')
    .factory('TestService', TestService);

    TestService.$injection = [];

    var user = {
      "_id": 1,
      "name": "Marco",
      "surname": "Rossi",
      "age": 20,
      "address": "Via Roma, 3",
      "city": "Rome",
      "telephon": 3335544888,
      "mail": "marco@rossi.it"
    }

    function TestService(){
      return {
        log: log
      }

      function log (callback){
        callback = callback || angular.noop;
        return callback(user);
      }
    }
})();

//# sourceMappingURL=build/App/bundle.js.map
