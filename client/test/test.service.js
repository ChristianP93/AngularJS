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
