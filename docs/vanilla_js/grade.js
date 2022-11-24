/*
1. 문제 파악
 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B,
 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력
 첫째 줄에 시험 점수가 정수로 주어진다.(0 <= 시험 점수 <= 100)

2. 유추 파악
 첫째 줄에 정수가 주어진다.
 입력 받은 정수가 90 ~ 100은 A, 80 ~ 89은 B, 70 ~ 79은 C, 60 ~ 69은 D,
 나머지 점수는 F를 출력한다.

3. 주요 단어 영문 선정
 입력 input
 출력 output
 성적 grade
 점수 score

4. 테스트 케이스
 100 => A
 79 => C
*/

// 5. 프로그래밍 순서
// 입력
let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// 처리
let score = input[0];
let grade;

if (score < 60) {
  grade = "F";
} else if (score < 70) {
  grade = "D";
} else if (score < 80) {
  grade = "C";
} else if (score < 90) {
  grade = "B";
} else if (score <= 100) {
  grade = "A";
}

// 출력
console.log(grade);
