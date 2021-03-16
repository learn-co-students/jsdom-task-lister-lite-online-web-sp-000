const form = document.querySelector("#create-task-form");
const list = document.querySelector("#tasks");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const newTask = document.querySelector("#new-task-description").value;

  list.innerHTML += `<li> ${newTask} 
  <button data-action = "delete"> X </button>
  </li>`;
});

list.addEventListener("click", function (e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  
});
