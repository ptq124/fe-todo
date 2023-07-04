const { showTodos } = require("./command/showTodos");
const { addTodos } = require("./command/addTodos");
const { deleteTodos } = require("./command/deleteTodos");
const { updateTodos } = require("./command/updateTodos");
const { 현재상태출력 } = require("./utils/util");
const { todos } = require("./todo");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todosData = [...todos];

function Input() {
  rl.question("명령하세요 : ", (command) => {
    const [cmd] = command.split("$");

    if (cmd === "show") {
      const [, status] = command.split("$");
      showTodos(status, todosData);
    } else if (cmd === "add") {
      const [, subject, tags, status] = command.split("$");
      todosData = addTodos(todosData, subject, tags, status);
      현재상태출력(todosData);
    } else if (cmd === "delete") {
      const [, id] = command.split("$");
      todosData = deleteTodos(todosData, id);
      현재상태출력(todosData);
    } else if (cmd === "update") {
      const [, id, status] = command.split("$");
      todosData = updateTodos(todosData, id, status);
      현재상태출력(todosData);
    } else {
      rl.close();
    }

    Input();
  });
}

Input();
