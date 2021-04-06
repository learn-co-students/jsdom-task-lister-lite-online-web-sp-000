document.addEventListener("DOMContentLoaded", () => {
  let element = document.getElementById("new-task-description");
  let submit = document.getElementById("create-task-form");
  let task = document.getElementById("tasks");
  

  function generate(submit) {
    submit.preventDefault();
  const li = document.createElement('li');
    li.innerHTML = element.value;
    task.appendChild(li);
  }
  submit.addEventListener("submit", generate)

});
