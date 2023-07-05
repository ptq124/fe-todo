import { 현재상태출력, 상태리스트출력 } from "../utils/todoPrint.js";

function showTodos(status, todosData) {
  // status: "all", "todo", "doing", "done";
  const todoArray = todosData.filter((obj) => obj.status === "todo");
  const doingArray = todosData.filter((obj) => obj.status === "doing");
  const doneArray = todosData.filter((obj) => obj.status === "done");

  const todoCount = todoArray.length;
  const doingCount = doingArray.length;
  const doneCount = doneArray.length;

  if (status === "all") 현재상태출력(todosData);
  else if (status === "todo") 상태리스트출력(status, todoCount, todoArray);
  else if (status === "doing") 상태리스트출력(status, doingCount, doingArray);
  else if (status === "done") 상태리스트출력(status, doneCount, doneArray);
  else console.log("잘못된 입력");
}

export { showTodos };
