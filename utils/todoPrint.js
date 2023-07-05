import { 과목과아이디만드는문자열 } from "./util.js";

function 현재상태출력(todosData) {
  const todoArray = todosData.filter((obj) => obj.status === "todo");
  const doingArray = todosData.filter((obj) => obj.status === "doing");
  const doneArray = todosData.filter((obj) => obj.status === "done");

  const todoCount = todoArray.length;
  const doingCount = doingArray.length;
  const doneCount = doneArray.length;

  console.log(
    `현재상태 : todo: ${todoCount}개, doing:${doingCount}개, done:${doneCount}개`
  );
}

function 상태리스트출력(status, statusCount, statusArray) {
  console.log(
    `${status}리스트 : 총${statusCount}건 : ${과목과아이디만드는문자열(
      statusArray
    )}`
  );
}

export { 현재상태출력, 상태리스트출력 };
