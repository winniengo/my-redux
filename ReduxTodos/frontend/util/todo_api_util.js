export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};

export const createTodo = (todo, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: todo,
    success,
    error
  });
};

export const updateTodo = (todo, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/todos/${todo.id}`,
    data: {todo},
    success,
    error
  });
};

export const destroyTodo = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/todos/${id}`,
    success,
    error
  });
};
