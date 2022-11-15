// operate nmber type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
// recommanded this way
let concate_string = `${number_first}${string_second}`;

string_second = "A";
console.log(number_first + string_second);

// Strings
let animal = "tiger";
console.log(`${animal}`);

let sentance = "  5 2 6  ";
let trims = sentance.trim(); // 공백 제거
let splits = trims.split(" "); // 공백으로 배열 만듬
let maps = splits.map(Number); // 각 배열을 String To Number
console.log(maps[0] + maps[1] + maps[2]); // 합산함

let inputs = sentance.trim().split(" ").map(Number); // 체인 펀션
console.log(inputs[0] + inputs[1] + inputs[2]); // 합산함

// typeof number_first
// 'number'
// typeof string_second
// 'string'
// typeof ani
// 'undefined'
// typeof animal
// 'string'
// animal.substring(0, 3)
// animal.charAt(0)
// 't'
// animal = animal.replace('ti', 'TI')
// 'TIger'
// animal.charAt(0)
// 'T'
// animal.split('g')
// (2) ['TI', 'er']
// 0:
// 'TI'
// 1:
// 'er'
// length:
// 2
