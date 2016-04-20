describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('has two todos', function() {
    browser.get('/');
    var todos = $$('#todos li');
    expect(todos.first().getText()).toContain('ToDo1: completed');
    expect(todos.last().getText()).toContain('ToDo2: not completed');
  });

  it('can add todos', function() {
    browser.get('/');
    $('#newtodos').sendKeys('New ToDo');
    $('#addtodos').click();
    var newTodo = $$('#todos li').last().getText();
    expect(newTodo).toContain('New ToDo');
  });

  it('can remove todos', function() {
    browser.get('/');
    $('#removetodos').click();
    var todos = $$('#todos li');
    expect(todos.count()).toEqual(1);
  });

  it('can mark todos as completed', function() {
    browser.get('/');
    var todo = $$("#todos li").last();
    todo.element(by.css('.complete')).click();
    expect(todo.getText()).toContain('ToDo2: completed');
  });
});
