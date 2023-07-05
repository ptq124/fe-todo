function deleteTodos(todosData, id) {
  const newTodosData = todosData.filter((obj) => obj.id !== id);
  const deleteTodosData = todosData.filter((obj) => obj.id === id)[0];
  console.log(
    `${deleteTodosData.name} ${deleteTodosData.status}가 목록에서 삭제됐습니다.`
  );
  return [...newTodosData];
}

export { deleteTodos };
