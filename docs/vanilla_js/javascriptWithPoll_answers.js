const answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];

for (let i = 0; i < answers.length; i++) {
  //   console.log(`${answer["questions_uid"]}, ${answer["example_uid"]}`);
  let ans = answers[i].questions_uid;
  if (ans == "Q" + (answers[i] + 1)) {
    console.log("같음");
  } else {
    console.log(`${answers[i].questions_uid}`);
  }
}

/*
for (let answer of answers) {
  //   console.log(`${answer["questions_uid"]}, ${answer["example_uid"]}`);
  console.log(`${answer["questions_uid"]}`);
}
*/
