//  function name(parameter1, parameter2, parameter3) {
//     // code to be executed
//      return
//  }

{
  let sum_number = 1 + 3;
  sum_number = 3 + 5;
  sum_number = 6 + 9;
  let sum_function = sum(1, 2); // item_first=1, item_second=2
  console.log();
}

// Normal Function
function sum(item_first, item_second) {
  return item_first + item_second;
}

// anonymouse Function 익명 함수
// let calculateSum = function (item_first, item_second) {
//   return item_first + item_second;
// };

// {
//   console.log(`${calculateSum(5, 7)}`);
// }

// Arrow Function 화살표 함수
let calculateSumSecond = (item_first, item_second) => {
  return item_first + item_second;
};

{
  let result = calculateSumSecond(7, 5);
  console.log(`${result}`);
  console.log(`${calculateSumSecond(2, 8)}`);
}

// rest parameters
function printRestParams(...args /*array라고 생각*/) {
  let restParam = (arg) => {
    if (typeof arg == "object") {
    }
    console.log(`arg : ${arg}`);
  };
  args.forEach(restParam);
}

{
  printRestParams(2, 4, 5);
  printRestParams(2, [4, 3, 2], 5, 6, 7);
}
