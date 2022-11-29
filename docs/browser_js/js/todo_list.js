let taskInput = document.querySelector("#taskId");

let button = document.querySelector("#btnAdd");
button.addEventListener("click", (event) => {
  taskForm(event);
});

taskInput.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    taskForm(event);
  }
});

function taskForm(event) {
  let taskValue = taskInput.value;
  if (taskValue == "") {
    alert("Please enter a task");
  } else {
    addComment(event);
  }
}

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

function addComment(event) {
  let queryComments = document.querySelector(".comments");
  let taskValue = taskInput.value;
  queryComments.insertAdjacentHTML(
    "beforeend",
    newTask_start + taskValue + newTask_end
  );
  taskInput.value = "";
  taskInput.focus();
}

let queryComments = document.querySelector(".comments");
queryComments.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite") {
    event.target.innerHTML = "favorite_border";
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});
