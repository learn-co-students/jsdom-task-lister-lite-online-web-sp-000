document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const textBox = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");
  form.addEventListener("submit", () => {
    let li = document.createElement('li');
    li.innerText = textBox.value;
    list.appendChild(li);
    event.preventDefault();
  })
});
