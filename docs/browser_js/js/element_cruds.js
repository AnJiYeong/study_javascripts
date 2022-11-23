// div.inner 태그 내부에 <div>hello</div>를 추가
// 프로그래밍 방식 적용
let queryInner = document.querySelector("#container > .inner");

// create Element
let element = document.createElement("div");
let helloText = document.createTextNode("hello");
element.appendChild(helloText);
queryInner.appendChild(element);

// inner Html
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");

let item =
  "<div class='item'>" + animal["name"] + " : " + animal["age"] + "</div>";
item = `<div class="item">${animal["name"]} : ${animal["age"]}</div>`;
queryApp.innerHTML = item;

// 해보기
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];
let queryList = document.querySelector("#list");

productsData.forEach((product, index) => {
  snack = `<div id='list'>${product["title"]} : ${product["weight"]}</div>`;
  //console.log(`${product["title"]} : ${product["weight"]}`);
  queryList.innerHTML = snack;
});

/*
  snack[index] = "<div id='list'>" + productsData[index] + "</div>";
  // snack = `<div>${productsData["title"]} : ${productsData["weight"]}</div>`;
  queryList.innerHTML = snack[index];
});
*/

// snack = `<div>${productsData["title"]} : ${productsData["weight"]}</div>`;
//queryList.innerHTML = snack;

// for (let product of producsData) {
//   snack = `<div>${product["title"]} : ${product["weight"]}</div>`;
//   queryList.innerHTML = snack;
// }
