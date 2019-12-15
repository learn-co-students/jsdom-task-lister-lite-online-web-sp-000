document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  function logSubmit(event) {
    event.preventDefault();
    document.getElementById("list").innerHTML += "<li>cool</li>";
  }

  form.addEventListener('submit', logSubmit);
});
