let taskInput = document.querySelector("#taskId");

// click
let button = document.querySelector("#btnAdd");
button.addEventListener("click", (event) => {
  taskForm(event);
});

// Enter
taskInput.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    taskForm(event);
  }
});

// 입력값 유무 비교
function taskForm(event) {
  let taskValue = taskInput.value;
  if (taskValue == "") {
    alert("Please enter a task"); // 입력값 없는 경우 alert 발생
  } else {
    addComment(event); // 있는 경우 들어감
  }
}

// 하트, 휴지통 아이콘 HTML
newTask_start = '<li class="task"><span>';
newTask_end = `</span>
                    <span class="flex-container">
                        <span>
                            <i class="material-icons cursor color-yellow">favorite_border</i>
                        </span>
                        <span>
                            <i class="material-icons cursor color-red">delete</i>
                        </span>
                    </span>
            </li>`;

// 입력값 있는 경우 실행되는 함수
function addComment(event) {
  let queryComments = document.querySelector(".comments");
  let taskValue = taskInput.value;
  queryComments.insertAdjacentHTML(
    "beforeend",
    newTask_start + taskValue + newTask_end
  );
  taskInput.value = ""; // 입력 후 input창 초기화
  taskInput.focus();
}

let queryComments = document.querySelector(".comments");
queryComments.addEventListener("click", (event) => {
  iconEvent(event);
});

// 아이콘 클릭 시 발생
function iconEvent(event) {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite") {
    event.target.innerHTML = "favorite_border";
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
}
