/*
1. 문페 파악
첫째 줄에 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어진다.
아이디는 알파벳 소문자로만 이루어져 있으며, 길이는 50자를 넘지 않는다.
아이디 뒤에 ??!를 붙여 놀람을 출력한다.

2. 유추 파악
첫째 줄에 아이디가 주어지고(소문자로 이루어짐, 50이하 글자)
아이디 뒤에 ??!를 붙여 출력한다.

3. 주요 단어 영문 선정
입력 input
출력 output
아이디 id

4. 테스트 케이스
joonas => joonas??!
baekjoon => baekjoon??!
*/

// 5. 프로그래밍 순서
// 입력
let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim();

// 처리
let id = input;

// 출력
console.log(`${id}??!`);
