(function() {
  'use strict';

  angular
    .module('toDoAngularFire')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($firebaseArray) {
    var vm = this;
    var ref = new Firebase("https://glowing-heat-6521.firebaseio.com/Tasks");
    vm.todos = $firebaseArray(ref);
    vm.addTodo = function(){
    vm.todos.$add(vm.todo);
    //  vm.todos.$add({name:vm.todo.name})
   }
   vm.removeTodo = function(todo){
      vm.todos.$remove(todo);
   }
   vm.editTodo = function(todo){
     vm.todos.$save(todo);
   }
  }

})();
