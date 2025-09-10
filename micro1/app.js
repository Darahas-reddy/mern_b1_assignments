// Difficulty: very easy

function showTask() {
  const input = document.getElementById("taskInput");
  const output = document.getElementById("output");

  // ── TEACHING-BUG #2 (logic) ──
  output.innerHTML = input.value;

  // ── TEACHING-BUG #5 (style) ──
  output.style.fontSize = "24px";
  output.style.color = "black";
}

function makeBold() {
  const output = document.getElementById("output");
  output.style.fontWeight = "bold";
  output.style.color = "black";
}

function tryHTML() {
  const output = document.getElementById("output");
  output.innerHTML = "<b>" + output.innerText + "</b>";
}

function clearTask() {
  const output = document.getElementById("output");
  output.textContent = "";
}

function myFn(){
    const output=document.getElementById("output");
    output.innerHTML = "Button was clicked!";
    output.style.color = "blue";
    output.style.fontSize = "20px";
    output.style.fontWeight = "bold";
}

