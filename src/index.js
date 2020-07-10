document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", function(event) {
  event.preventDefault()
  newTask()
  });
});

let todos = document.getElementById("list").textContent

function = newTask(e) {
  todos = `${e}`
}
