document.addEventListener("DOMContentLoaded", () => {
  ("#create-task-form").submit(function(e) {
    let element = document.querySelector("ul#tasks");
    element.innerHTML = "new-task-description";
    e.preventDefault();
  }
});
