document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const ul = document.getElementById("tasks");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const input = document.getElementById("new-task-description").value;
    const li = document.createElement("li");
    const taskPriority = document.getElementById("taskPriority");
    const dueDate = document.getElementById("due-date").value;

    li.innerHTML = `${input} ${dueDate} <button>X</button>`;

    ul.appendChild(li);

    li.className = taskPriority.value

    li.querySelector("button").addEventListener("click", event => {
      li.parentNode.removeChild(li);
    });
  });
});