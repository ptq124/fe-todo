function updateTodos(todosData, id, status) {
  const newTodos = todosData.map((obj) =>
    obj.id === id ? { ...obj, status } : obj
  );

  const updateTodosData = newTodos.filter((obj) => obj.id === id)[0];
  console.log(
    `${updateTodosData.name} ${updateTodosData.status}으로 목록에서 변경됐습니다.`
  );

  return newTodos;
}

export { updateTodos };
