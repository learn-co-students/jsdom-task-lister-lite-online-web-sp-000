document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  let taskDescription = document.getElementById('new-task-description').value
  function logSubmit(event) {
    event.preventDefault();
    document.getElementById("list").innerHTML += `<li> ${taskDescription} </li>`;
  }

  form.addEventListener('submit', logSubmit);
});
