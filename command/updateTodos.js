function updateTodos(todosData, id, status) {
  const newTodos = todosData.map(function (obj) {
    return obj.id == id ? { ...obj, status: status } : obj;
  });

  return newTodos;
}

module.exports = { updateTodos };
