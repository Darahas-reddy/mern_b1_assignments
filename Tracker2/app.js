// Difficulty: easy

// Get references to elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// ── TEACHING-BUG #3 (intent) ──
// This function is never connected to any button
function clearAllTasks() {
  taskList.innerHTML = "";
}

// Add event listener to addBtn
addBtn.addEventListener("click", function () {
  const task = input.value;

  // ── TEACHING-BUG #6 (logic) ──
  // No validation — even blank tasks are added
  if (task.length > 0) {
    // ── TEACHING-BUG #2 (logic) ──
    taskList.innerHTML += task + "<br>";
  }

  // ── TEACHING-BUG #8 (comment) ──
  // This "clears the taskList" — false comment!
  // taskList.innerText = ""; 
});

// TODO: Actually connect the clearAllTasks() function to #clearBtn

// TODO: Replace innerText with innerHTML for proper formatting
// TODO: Prevent adding empty tasks
// TODO: Add visual cue for empty task list


