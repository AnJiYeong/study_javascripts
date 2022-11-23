// 누르면 글자 바뀜
function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change on Me!";
}

// 누르면 팝업창뜸
let queryClickalert = document.querySelector("#clickalert");
// Element.addEventListener(event, function, useCapture);
queryClickalert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("click on Me!");
}

// 버튼 누르면 본문 텍스트 바뀜
let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);

function targetText(event) {
  // parameter를 사용하지 않아도 event를 넣어줄 것
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
