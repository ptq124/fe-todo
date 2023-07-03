const { todos } = require("./todo");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  let input = [];
  console.log(todos);

  process.stdout.write("명령하세요: ");
  rl.on("line", (line) => {
    input = line.split("$").map((el) => el);
    if (input[0] === "show") {
      show(input[1]);
    }
    console.log(input);
    rl.close();
  });
}

function show(status) {
  // status: 'all', 'todo', 'doing', 'done'
  const todoArray = todos.filter((obj) => obj.status === "todo");
  const doingArray = todos.filter((obj) => obj.status === "doing");
  const doneArray = todos.filter((obj) => obj.status === "done");

  const todoCount = todoArray.length;
  const doingCount = doingArray.length;
  const doneCount = doneArray.length;
  const allCount = todoCount + doingCount + doneCount;

  if (status === "all") {
    print();
  } else if (status === "todo") {
  } else if (status === "doing") {
  } else if (status === "done") {
  } else {
    console.log("예외처리");
  }
}

function print(MSG) {
  console.log(MSG);
}

main();
