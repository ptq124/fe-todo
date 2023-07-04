const { tagsToArray, makeRandomId } = require("../utils/util");

function addTodos(todosData, subject, tags, status) {
  const tagsList = tagsToArray(tags);
  const newTodoData = {
    name: subject,
    tags: tagsList,
    status: status || "todo",
    id: makeRandomId(),
  };

  const updateTodosDatas = todosData.reduce(
    (acc, cur) => {
      acc.push(cur);
      return acc;
    },
    [newTodoData]
  );
  // study-javascript 1개가 추가됐습니다.(id : 7788)
  console.log(
    `${newTodoData.name} 1개가 추가됐습니다. (id : ${newTodoData.id})`
  );

  return updateTodosDatas;
}

module.exports = { addTodos };
