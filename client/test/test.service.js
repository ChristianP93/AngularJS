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
