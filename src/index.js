document.addEventListener("DOMContentLoaded", () => {
  let taskField = document.querySelector("#new-task-description");
  let list = document.querySelector("div#list ul#tasks");

  document.querySelector("form#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    list.innerHTML = `<li>${taskField.value}</li>`;
  });
});
