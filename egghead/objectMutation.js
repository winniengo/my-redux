const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  };
};
