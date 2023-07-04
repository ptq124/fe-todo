const { showTodos } = require("./command/showTodos");
const { addTodos } = require("./command/addTodos");
const { deleteTodos } = require("./command/deleteTodos");
const { updateTodos } = require("./command/updateTodos");
const { todos } = require("./todo");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  Input();
}

let todosData = [...todos];

function Input() {
  rl.question("명령하세요 : ", (command) => {
    const inputArray = command.split("$");
    const cmd = inputArray[0];

    if (cmd === "show") {
      const status = inputArray[1];
      showTodos(status, todosData);
    } else if (cmd === "add") {
      todosData = addTodos(todosData, inputArray);
    } else if (cmd === "delete") {
      const id = inputArray[1];
      todosData = deleteTodos(todosData, id);
      console.log(todosData);
    } else if (cmd === "update") {
      const id = inputArray[1];
      const status = inputArray[2];
      todosData = updateTodos(todosData, id, status);
      console.log(todosData);
    } else {
    }

    Input();
  });
}

main();
