toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  this.todos = [new ToDoFactory('ToDo1', true),
                new ToDoFactory('ToDo2')
               ];

  this.addToDo = function(todoText) {
    this.todos.push(new ToDoFactory(todoText));
  };

  this.removeToDo = function() {
    this.todos.pop();
  };
}]);
