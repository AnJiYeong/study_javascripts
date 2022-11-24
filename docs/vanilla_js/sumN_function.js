/*
1. 문제 파악
    n이 주어졌을 때, 1부터 n까지 합을 구함
    첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어짐
    1부터 n까지 합을 출력
2. 유추 파악
    n이 주어지고 1부터 n까지의 합을 출력
    입력값 n은 (1 ≤ n ≤ 10,000)를 따음

3. 주요 단어 영문 선정
    입력 input
    출력 output
    값 num

4. 테스트 케이스
    3 => 6
    5 => 15
*/

// 5. 프로그래밍 순서
// 입력
let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// 처리
function sumF(num) {
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
let num = input[0];
let sum = 0;

// 출력
console.log(sumF(num));
