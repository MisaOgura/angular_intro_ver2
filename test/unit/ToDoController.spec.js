describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var controller, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    controller = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
  }));

  it('initialises with several todos', function() {
    var todo1 = new ToDoFactory('ToDo1', true);
    var todo2 = new ToDoFactory('ToDo2', false);
    expect(controller.todos).toEqual([todo1, todo2]);
  });

  it('adds a new todo', function() {
    controller.addToDo('New todo');
    var new_todo = new ToDoFactory('New todo', false);
    expect(controller.todos.pop()).toEqual(new_todo);
  });

  it('removes a todo', function() {
    controller.removeToDo();
    expect(controller.todos.length).toEqual(1);
  });
});
