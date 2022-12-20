// display:none
let queryNoneBtn = document.querySelector("#none_btn");
queryNoneBtn.addEventListener("click", (event) => {
  noneEvent(event);
});

let queryNone = document.querySelector("#none");
function noneEvent(event) {
  queryNone.style.display = "none";
}

// visibility:hidden
let queryHideBtn = document.querySelector("#hide_btn");
queryHideBtn.addEventListener("click", (event) => {
  hideEvent(event);
});

let queryHide = document.querySelector("#hide");
function hideEvent(event) {
  queryHide.style.visibility = "hidden";
}

// Reset
let queryResetBtn = document.querySelector("#reset_btn");
queryResetBtn.addEventListener("click", (event) => {
  resetEvent(event);
});

function resetEvent(event) {
  queryNone.style.display = "block";
  queryHide.style.visibility = "visible";
}
