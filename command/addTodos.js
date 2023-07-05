import { tagsToArray, makeRandomId } from "../utils/util.js";

function addTodos(todosData, name, tags, status) {
  const tagsList = tagsToArray(tags);
  const newTodoData = {
    name,
    tags: tagsList,
    status: status || "todo",
    id: makeRandomId(),
  };

  const updateTodosDatas = [...todosData, newTodoData];

  // const updateTodosDatas = todosData.reduce(
  //   (acc, cur) => {
  //     acc.push(cur);
  //     return acc;
  //   },
  //   [newTodoData]
  // );
  // study-javascript 1개가 추가됐습니다.(id : 7788)
  console.log(
    `${newTodoData.name} 1개가 추가됐습니다. (id : ${newTodoData.id})`
  );

  return updateTodosDatas;
}

export { addTodos };
