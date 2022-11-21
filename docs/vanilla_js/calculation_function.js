/*
1. 문제 파악
두 자연수 A와 B가 주어진다.
이때, 줄별로 A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력
자연수는 (1 ≤ A, B ≤ 10,000)를 따른다.

2. 유추 파악
두 자연수가 주어지고 한 줄별로
두 자연수를 +, -, *, /, % 연산하여 출력한다.

3. 주요 단어 영문 이름 선정
자연수 num
입력 input
출력 output

4. 테스트 케이스
7 3
=>
10
4
21
2
1
*/

// 5. 프로그래밍 순서
// 입력
let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

//처리
function plusF(input_first, input_second) {
  let plus = num_01 + num_02;
  return plus;
}

function minusF(input_first, input_second) {
  let minus = num_01 - num_02;
  return minus;
}

function multiplicationF(input_first, input_second) {
  let multiplication = num_01 * num_02;
  return multiplication;
}

function divisionF(input_first, input_second) {
  let division = Math.floor(num_01 / num_02);
  return division;
}

function remainderF(input_first, input_second) {
  let remainder = num_01 % num_02;
  return remainder;
}

let num_01 = input[0];
let num_02 = input[1];

// 출력
console.log(plusF(num_01, num_02));
console.log(minusF(num_01, num_02));
console.log(multiplicationF(num_01, num_02));
console.log(divisionF(num_01, num_02));
console.log(remainderF(num_01, num_02));
