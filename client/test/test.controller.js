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
