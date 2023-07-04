function deleteTodos(todosData, id) {
  const newTodosData = todosData.filter((obj) => obj.id != id);
  return [...newTodosData];
}

module.exports = { deleteTodos };
