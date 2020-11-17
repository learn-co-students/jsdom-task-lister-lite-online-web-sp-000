document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  let list = document.getElementById('tasks');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = document.querySelector("#new-task-description").value;
      list.innerHTML += `<li>${newTask}
        <button data-action = "delete"> x </button> 
        </li>`;
      form.reset();
  });
  list.addEventListener("click", function(e) {
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove();
    }
  });
});