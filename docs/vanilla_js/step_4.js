// https://www.acmicpc.net/problem/9498
let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
let num = inputs[0];

let score = " ";
if (num < 60) {
  score = "F";
} else if (num < 70) {
  score = "D";
} else if (num < 80) {
  score = "C";
} else if (num < 90) {
  score = "B";
} else {
  score = "A";
}
console.log(score);
