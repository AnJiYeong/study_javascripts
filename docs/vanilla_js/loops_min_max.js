// https://www.acmicpc.net/problem/10818
/*
1. 문제 파악
첫째 줄에 정수 a, 둘째 줄에 a만큼의 정수들을 입력받고
입력된 정수들의 최소값과 최대값을 출력
단, object 타입을 사용해야 함
(모든 값은 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같아야 함)

2. 유추 파악
a만큼의 공간을 배열에 할당하여? 이후 입력되는 정수들을 배열에 초기화해주고
그 배열 값중에서 최소값과 최대값을 출력해야 함

3. 주요 단어 영문 이름 선정
입력 input
정수 decimal
최소값 min
최대값 max
배열 arr

4. 테스트 케이스
5
20 10 35 30 7
=> 7 35
*/

// 5. 프로그래밍 순서
// 입력
let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

// 처리
let obj = { min: 1000000, max: -1000000 };

let n1 = input[0];
let n2 = input[1].split(" ").map(Number);

for (let i = 0; i < n2.length; i++) {
  if (n2[i] > obj["max"]) obj["max"] = n2[i];
  if (n2[i] < obj["min"]) obj["min"] = n2[i];
}

// 출력
console.log(`${obj["min"]} ${obj["max"]}`);
