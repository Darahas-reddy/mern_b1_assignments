
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function showEmptyState() {
  taskList.innerHTML = '<div id="emptyState" class="empty">No notes yet.</div>';
}


function clearAllTasks() {
  showEmptyState();
  input.focus();
}

addBtn.addEventListener("click", function () {
  const task = input.value;

  if (task.length > 0) {
    taskList.innerHTML += task + "<br>";
  }
  else{
    alert("note cannot be empty");
  }
 
    const text = input.value.trim();

      if (text === "") return ;

      if (emptyState) emptyState.remove();

      notes.innerHTML += "<br>" + text;

      input.value = "";
      input.focus();
 
});

clearBtn.addEventListener("click", clearAllTasks);
showEmptyState();