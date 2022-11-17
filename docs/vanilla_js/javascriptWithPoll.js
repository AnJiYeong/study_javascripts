let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);

let input_answers = [];
for (let i = 0; i < 5; i++) {
  input_nswers[i] = input[i];
}

const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const example_list = [
  { example: "전혀 아니다", example_uid: "E1", order: 1 },
  { example: "아니다", example_uid: "E2", order: 2 },
  { example: "보통이다", example_uid: "E3", order: 3 },
  { example: "그렇다", example_uid: "E4", order: 4 },
  { example: "매우 그렇다", example_uid: "E5", order: 5 },
];

const answers = [
  { example_uid: "Q1", example_uid: "E1" },
  { example_uid: "Q1", example_uid: "E2" },
  { example_uid: "Q1", example_uid: "E3" },
  { example_uid: "Q2", example_uid: "E1" },
  { example_uid: "Q2", example_uid: "E2" },
  { example_uid: "Q2", example_uid: "E3" },
  { example_uid: "Q2", example_uid: "E4" },
  { example_uid: "Q3", example_uid: "E1" },
  { example_uid: "Q3", example_uid: "E2" },
  { example_uid: "Q4", example_uid: "E1" },
  { example_uid: "Q4", example_uid: "E2" },
  { example_uid: "Q4", example_uid: "E3" },
  { example_uid: "Q4", example_uid: "E4" },
  { example_uid: "Q4", example_uid: "E5" },
  { example_uid: "Q5", example_uid: "E1" },
  { example_uid: "Q5", example_uid: "E2" },
  { example_uid: "Q5", example_uid: "E3" },
];
