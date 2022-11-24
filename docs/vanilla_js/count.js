/*
1. 문제 파악
    총 N개의 정수가 주어졌을 때,
    정수 v가 몇 개인지 구하는 프로그램을 작성
    첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어짐
    둘째 줄에는 정수가 공백으로 구분되어져있다.
    셋째 줄에는 찾으려고 하는 정수 v가 주어짐
    첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력

2. 유추 파악
    첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100),
    둘째 줄에 N개 만큼의 정수,
    셋째 줄에 찾으려고 하는 정수 v가 주어진다.
    주어진 정수 중에 v가 몇 개인지 출력한다.

3. 주요 단어 영문 선정
    입력 input
    출력 output
    정수 num

4. 테스트 케이스
    11
    1 4 1 2 4 2 4 2 3 4 4
    2
    => 3

    11
    1 4 1 2 4 2 4 2 3 4 4
    5
    => 0
*/

// 5. 프로그래밍 순서
// 입력
let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

// 처리
let N = input[0].split(" ").map(Number);
let num = input[1].split(" ").map(Number);
let v = input[2].split(" ").map(Number);

let count = 0;

for (item of num) {
  if (item == v) count++;
}

// 출력
console.log(count);
