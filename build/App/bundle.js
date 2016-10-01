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

(function(){

  'use strict';

  angular.module('App.test')
    .controller('TestController', TestController);

    TestController.$inject=['TestService', '$location', '$routeParams'];

    function TestController(TestService, $location, $routeParams){
      var vm = this;

      vm.nome = 'Christian';

      vm.saluta = function(){
        console.log('controller');
        return TestService.log(function(user){
          vm.users = user;
          console.log(vm.user);
        }, function(err){
          return err;
        });
      }
      // console.log(vm);
      vm.redirect = function(id){
        return $location.path('/test/edit/' + id);
      }

      vm.editUser = function(){
        return TestService.log(function(users){
          vm.users = users;
          if(!$routeParams.id) return
          var userId = $routeParams.id;
          vm.users.map(function(index){
            if(index._id == userId){
              vm.detailsUser = index;
              console.log(vm.detailsUser);
            }
          });
        })
      }

      vm.saveUser = function(){
        return TestService.saveMyUser(vm.detailsUser, function(){
          console.log('ok');
          return $location.path('/test');
        },function(err){
          return err;
        })
      }

    }


})();

(function(){
  'use strict';

  angular.module('App')
    .factory('TestService', TestService);

    TestService.$injection = [];

    var user = [{
        "_id": 1,
        "name": "Marco",
        "surname": "Rossi",
        "age": 20,
        "address": "Via Roma, 3",
        "city": "Roma",
        "telephon": 3335544888,
        "mail": "marco@rossi.it"
      },
      {
        "_id": 2,
        "name": "Luca",
        "surname": "Rossi",
        "age": 18,
        "address": "Via Milano, 3",
        "city": "Milano",
        "telephon": 3335544887,
        "mail": "luca@rossi.it"
      }]


    function TestService(){
      return {
        log: log,
        saveMyUser: saveMyUser
      }

      function log (callback){
        callback = callback || angular.noop;
        return callback(user);
      }

      function saveMyUser(detailsUser, callback){
        callback = callback || angular.noop;
        user.map(function(index){
          if (detailsUser._id == index._id){
            index = detailsUser;
            return callback('ok');
          }
        })
        console.log('service');
        console.log(user);
      }
    }
})();

//# sourceMappingURL=build/App/bundle.js.map
