describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('has a todo: Todo1', function() {
    browser.get('/app');
    var todo = $('#todo');
    expect(todo.getText()).toContain('ToDo1');
  });
});
