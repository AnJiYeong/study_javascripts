// Array == ArrayList
fruits = ["apple", "banana", "orange", "mellon"];
let numbers = [1, 2, 3, 4, 5];
let fruits_init = new Array();
fruits_init = [];

// object == HashMap 비슷
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "mellon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "banana", objects];
let mixins_fourth = [fruits, numbers];

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

let first = ["apple", "banana"];
let second = ["orange", "mellon"];
let third = ["berry", "strawberry"];

let fruitsArray = [];
fruitsArray.push(first);
fruitsArray.push(second);
fruitsArray.push(third);

let mixins_list = [first, second, third];

console.log();
