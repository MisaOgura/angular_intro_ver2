toDoApp.factory('ToDoFactory', [function(){

  function ToDo(todoText, status) {
    this.text = todoText;
    this.completed = status || false;
  }

  ToDo.prototype.complete = function() {
    this.completed = true;
  };

  return ToDo;
}]);
