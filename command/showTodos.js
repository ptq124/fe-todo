function showTodos(status, todosData) {
  status: "all", "todo", "doing", "done";
  const todoArray = todosData.filter((obj) => obj.status === "todo");
  const doingArray = todosData.filter((obj) => obj.status === "doing");
  const doneArray = todosData.filter((obj) => obj.status === "done");

  const todoCount = todoArray.length;
  const doingCount = doingArray.length;
  const doneCount = doneArray.length;
  const allCount = todoCount + doingCount + doneCount;

  let showString = "";
  if (status === "all") {
    console.log(
      `현재상태 : todo: ${todoCount}개, doing:${doingCount}개, done:${doneCount}개`
    );
  } else if (status === "todo") {
    showString = todoArray
      .map((obj) => [obj.name, obj.id])
      .map((d) => `'${d[0]}, ${d[1]}'`)
      .join(", ");
    console.log(`${status}리스트 : 총${todoCount}건 : ${showString}`);
  } else if (status === "doing") {
    showString = doingArray
      .map((obj) => [obj.name, obj.id])
      .map((d) => `'${d[0]}, ${d[1]}'`)
      .join(", ");
    console.log(`${status}리스트 : 총${doingCount}건 : ${showString}`);
  } else if (status === "done") {
    showString = doneArray
      .map((obj) => [obj.name, obj.id])
      .map((d) => `'${d[0]}, ${d[1]}'`)
      .join(", ");
    console.log(`${status}리스트 : 총${doneCount}건 : ${showString}`);
  } else {
    console.log("예외처리");
  }
}

module.exports = { showTodos };
