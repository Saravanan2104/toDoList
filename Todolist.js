document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  var li = document.createElement("li");
  li.innerHTML = taskInput.value + '<button onclick="deleteTask(this)">Delete</button>';
  taskList.appendChild(li);

  taskInput.value = "";
}

function deleteTask(button) {
  var taskList = document.getElementById("taskList");
  var li = button.parentNode;
  taskList.removeChild(li);
}



function saveTasks() {
  var taskList = document.getElementById("taskList");
  var tasks = [];

  // Iterate through each li element and store the task text
  for (var i = 0; i < taskList.children.length; i++) {
    var taskText = taskList.children[i].innerText.trim();
    tasks.push(taskText.substring(0, taskText.length - 6)); // Remove "Delete" from the end
  }

  // Save tasks to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Tasks saved!");
}

function loadTasks() {
  var taskList = document.getElementById("taskList");
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Load tasks from local storage
  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = tasks[i] + '<button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);
  }
}

function deleteTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  localStorage.removeItem("tasks");
  alert("All tasks deleted!");
}
function logout() {
  location.href="index.html";
}



