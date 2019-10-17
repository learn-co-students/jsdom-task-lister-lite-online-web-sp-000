document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const todoList = document.getElementById("tasks");

  form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("event fired!");
    const input = document.getElementById("new-task-description").value;
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.addEventListener("click", e => removeElement(e));
    li.textContent = input;
    todoList.appendChild(li);
  });

  const removeElement = e => {
    e.target.remove();
  };
});
