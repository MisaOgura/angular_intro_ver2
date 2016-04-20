describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('has two todos', function() {
    browser.get('/app');
    var todos = $$('#todos li');
    expect(todos.first().getText()).toEqual('ToDo1: completed');
    expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });

  it('can add todos', function() {
    browser.get('/app');
    $('#newtodos').sendKeys('New ToDo');
    $('#addtodos').click();
    var newTodo = $$('#todos li').last().getText();
    expect(newTodo).toContain('New ToDo');
  });

  it('can remove todos', function() {
    browser.get('/app');
    $('#removetodos').click();
    var todos = $$('#todos li');
    expect(todos.count()).toEqual(1);
  });
});
