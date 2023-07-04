function addTodos(todosData, inputArray) {
  const subject = inputArray[1];
  const tags = inputArray[2];
  const tagsList = tagsArray(tags);
  const status = inputArray[3] ? inputArray[3] : "todo";
  const addData = {
    name: subject,
    tags: tagsList,
    status: status,
    id: Math.floor(Math.random() * 100001),
  };
  //   todosData = [...todosData, addData];
  const result = todosData.reduce(
    (acc, cur) => {
      acc.push(cur);
      return acc;
    },
    [addData]
  );
  return result;
}

function tagsArray(tags) {
  // ['favorite', 'like'] -> 'favorite', 'like'
  return tags.substring(1, tags.length - 1).split(",");
}

module.exports = { addTodos };
