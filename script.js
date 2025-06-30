function addProject() {
  const name = document.getElementById("projectName").value;
  const desc = document.getElementById("projectDesc").value;
  const deadline = document.getElementById("projectDeadline").value;

  if (!name || !desc || !deadline) {
    alert("Please fill all project fields.");
    return;
  }

  const projectList = document.getElementById("projectList");

  const projectEl = document.createElement("li");
  projectEl.className = "project";

  const taskInput = document.createElement("input");
  taskInput.placeholder = "Enter task name";

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.onclick = () => addTask(taskInput.value, taskList);

  const taskControls = document.createElement("div");
  taskControls.className = "task-controls";
  taskControls.appendChild(taskInput);
  taskControls.appendChild(addTaskBtn);

  const taskList = document.createElement("div");
  taskList.className = "task-list";

  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.className = "delete-btn";
  deleteProjectBtn.textContent = "Delete Project";
  deleteProjectBtn.onclick = () => projectList.removeChild(projectEl);

  projectEl.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Description:</strong> ${desc}</p>
    <p><strong>Deadline:</strong> ${deadline}</p>
  `;

  projectEl.appendChild(taskControls);
  projectEl.appendChild(taskList);
  projectEl.appendChild(deleteProjectBtn);
  projectList.appendChild(projectEl);

  document.getElementById("projectName").value = "";
  document.getElementById("projectDesc").value = "";
  document.getElementById("projectDeadline").value = "";
}

function addTask(taskName, container) {
  if (!taskName) {
    alert("Enter task name");
    return;
  }

  const taskEl = document.createElement("div");
  taskEl.className = "task";

  const select = document.createElement("select");
  select.innerHTML = `
    <option value="todo">To Do</option>
    <option value="progress">In Progress</option>
    <option value="done">Done</option>
  `;

  select.addEventListener("change", () => {
    const value = select.value;
    if (value === "todo") taskEl.style.borderLeftColor = "orange";
    else if (value === "progress") taskEl.style.borderLeftColor = "blue";
    else taskEl.style.borderLeftColor = "green";
  });

  const span = document.createElement("span");
  span.textContent = taskName;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => container.removeChild(taskEl);

  taskEl.appendChild(span);
  taskEl.appendChild(select);
  taskEl.appendChild(deleteBtn);
  container.appendChild(taskEl);
}
