// https://www.acmicpc.net/problem/15596
/*
1. 문제 파악
    정수 n개가 주어졌을 때, n개의 합을 구하는 함수 작성

2. 유추 파악
    정수 n개의 합을 수하는 함수 작성하기

3. 주요 단어 영문 이름 선정
    정수 num
    합 sum
    함수 function
*/
//프로그래밍
function sum(numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}

let array_num = [1, 2, 3, 4, 5, 6];
console.log(sum(array_num));
