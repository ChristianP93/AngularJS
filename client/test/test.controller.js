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
