describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller('ToDoController');
  }));

  it('initialises with several todos', function() {
    var todos = [{ text: 'ToDo1', completed: true },
                 { text: 'ToDo2', completed: false }
                ];
    expect(controller.todos).toEqual(todos);
  });

  it('adds a new todo', function() {
    controller.addToDo('New todo');
    var new_todo = {text: 'New todo', completed: false};
    expect(controller.todos.pop()).toEqual(new_todo);
  });

  it('removes a todo', function() {
    controller.removeToDo();
    expect(controller.todos.length).toEqual(1);
  });
});
