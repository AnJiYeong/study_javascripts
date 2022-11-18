const animals = ["dog", "cat", "bird", "fish", "lizard"];

// Normal
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable
for (let animal of animals) {
  console.log(`${animal}`);
}

const animals_obj = [
  // datatype = array
  // animal,
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}

// for(variable of iterable) {
//     code block to be executed
// }
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
}
(cars) => {
  console.log(`${car}`);
};
cars.forEach((car) => {
  console.log(`${car}`);
});
// forEach : arrow function을 그대로 가져온 것이라고 생각하면 편함
const array1 = ["a", "b", "c"];

array1.forEach((element, i) => console.log(element));

// Arrow Function
let arrowFunction = (element, index) /*parameter*/ => {
  console.log(`${element}, index ${index}`);
}; // 괄호, 중괄호 생략가능
array1.forEach(arrowFunction);

// Normal Function
function normalFunction(element) {
  console.log(element);
  array1.forEach(normalFunction);
}
