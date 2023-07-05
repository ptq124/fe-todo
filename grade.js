import * as readline from "node:readline";
import { showTodos } from "./command/showTodos.js";
import { addTodos } from "./command/addTodos.js";
import { deleteTodos } from "./command/deleteTodos.js";
import { updateTodos } from "./command/updateTodos.js";
import { 소문자변경 } from "./utils/util.js";
import { 현재상태출력 } from "./utils/todoPrint.js";

import { todos } from "./todo.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let TODOS_DATA = [...todos];

function Input() {
  rl.question("명령하세요 : ", (command) => {
    const [cmd] = command.split("$");

    if (소문자변경(cmd) === "show") {
      const [, status] = command.split("$");
      showTodos(status, TODOS_DATA);
    } else if (소문자변경(cmd) === "add") {
      const [, name, tags, status] = command.split("$");
      TODOS_DATA = addTodos(TODOS_DATA, name, tags, status);
      현재상태출력(TODOS_DATA);
    } else if (소문자변경(cmd) === "delete") {
      const [, id] = command.split("$");
      TODOS_DATA = deleteTodos(TODOS_DATA, Number(id));
      현재상태출력(TODOS_DATA);
    } else if (소문자변경(cmd) === "update") {
      const [, id, status] = command.split("$");
      TODOS_DATA = updateTodos(TODOS_DATA, Number(id), status);
      현재상태출력(TODOS_DATA);
    } else {
      console.log("잘못된 명령어 입력입니다.");
      rl.close();
    }

    Input();
  });
}

Input();
