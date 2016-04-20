toDoApp.controller('ToDoController', [function() {
  this.todos = [{ text: 'ToDo1', completed: true },
                { text: 'ToDo2', completed: false }
               ];

  this.addToDo = function(todoText) {
    var new_todo = {text: todoText, completed: false};
    this.todos.push(new_todo);
  };

  this.removeToDo = function() {
    this.todos.pop();
  };
}]);
