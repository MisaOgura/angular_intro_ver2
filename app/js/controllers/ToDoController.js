toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  this.todos = [new ToDoFactory('ToDo1', true),
                new ToDoFactory('ToDo2')
               ];

  this.addToDo = function(todoText) {
    var new_todo = {text: todoText, completed: false};
    this.todos.push(new_todo);
  };

  this.removeToDo = function() {
    this.todos.pop();
  };
}]);
