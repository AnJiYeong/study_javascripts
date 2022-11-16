/*
1. 문제 파악
첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다.
자연수는 100 보다 작다.
첫째 줄에 최대값, 둘째 줄에 최대값이 몇 번째 수인지 출력

2. 유추 파악
9개의 라인으로 자연수를 하나씩 받는다.
출력은 두 라인으로 첫째 줄은 최대값, 둘째 줄은 최대값이 위치한 순서를 출력

3. 주요 단어 영문 이름 선정
입력 input
출력 output
자연수 num
최대값 max

4. 테스트 케이스
3
29
38
12
57
74
40
85
61
=>
85
8
*/

// 5. 프로그래밍 순서
// 입력
let fs = require("fs");
const { maxHeaderSize } = require("http");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 처리
let max = -100;
let num = input.split("\n").map(Number);

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) max = num[i];
}

// 출력
console.log(max);
console.log(num.indexOf(max) + 1);
