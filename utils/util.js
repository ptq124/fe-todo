function 현재상태출력(todosData) {
  const todoArray = todosData.filter((obj) => obj.status === "todo");
  const doingArray = todosData.filter((obj) => obj.status === "doing");
  const doneArray = todosData.filter((obj) => obj.status === "done");

  const todoCount = todoArray.length;
  const doingCount = doingArray.length;
  const doneCount = doneArray.length;
  const allCount = todoCount + doingCount + doneCount;
  console.log(
    `현재상태 : todo: ${todoCount}개, doing:${doingCount}개, done:${doneCount}개`
  );
}

function tagsToArray(tags) {
  // ['favorite', 'like'] -> 'favorite', 'like'
  return tags.substring(1, tags.length - 1).split(",");
}

function makeRandomId() {
  return Math.floor(Math.random() * 100001);
}

module.exports = { 현재상태출력, tagsToArray, makeRandomId };
