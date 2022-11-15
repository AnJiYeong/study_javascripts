const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("아무거나 입력하세요: ", (input) => {
  let score = " ";
  if (rl < "60") {
    score = "F";
  } else if (rl < "70") {
    score = "D";
  } else if (rl < "80") {
    score = "C";
  } else if (rl < "90") {
    score = "B";
  } else {
    score = "A";
  }
  console.log(score);
  rl.close(); //close()를 호출하지 않으면 무한 반복
});

console.log();
