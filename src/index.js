document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  let taskDescription = document.getElementById('new-task-description')

  function logSubmit(event) {
    event.preventDefault();
    document.getElementById("list").innerHTML += `<li> ${taskDescription.value} <button id=${taskDescription.value} onclick= this.parentElement.remove()>X</button> </li>`;
    taskDescription.value = " "

  }


  form.addEventListener('submit', logSubmit);
});
