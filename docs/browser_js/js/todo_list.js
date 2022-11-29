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

newTask_start = '<li class="border"><span>';
newTask_end = `</span>
                    <span class="flex-container">
                        <span>
                            <i class="material-icons cursor">favorite_border</i>
                        </span>
                        <span>
                            <i class="material-icons cursor">delete</i>
                        </span>
                    </span>
                
            </li>`;

function addComment(event) {
  let taskValue = taskInput.value;
  let queryComments = document.querySelector(".comments");
  queryComments.insertAdjacentHTML(
    "beforeend",
    newTask_start + taskValue + newTask_end
  );
}
