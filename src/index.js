document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", function (e) {
    let element = document.querySelector("ul#tasks");
    element.innerHTML = "new-task-description";
    e.preventDefault();
  }
});
