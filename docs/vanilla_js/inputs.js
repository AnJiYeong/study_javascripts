let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let readFileSync = fs.readFileSync(filepath);
// let toString = readFileSync.toString();
// let trim = toString.trim();
// let split = trim.split(" ");
// let inputs= splits.map(Number);
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
// toString -> 문자를 string으로 바꿔줌

console.log(inputs[0] + inputs[1]);
