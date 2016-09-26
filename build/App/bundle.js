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
      console.log('miao');
      $routeProvider
        .when('#/miao', {
          templateUrl: 'view/client/test/test.template.html'
        })
    }

});

(function(){

  'use strict';

  angular.module('App.test')
    .controller('TestController', TestController);

    TestController.$inject=[];

    function TestController(){
      var vm = this;

      vm.nome = 'Christian';

      console.log(vm);
    }


})();

//# sourceMappingURL=build/App/bundle.js.map
