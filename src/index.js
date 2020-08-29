document.addEventListener("DOMContentLoaded", () => {
  // your code here

    document.querySelector("#create-task-form").addEventListener("submit", function(event) {
      event.preventDefault();
      document.getElementById("tasks").innerHTML += document.getElementById("new-task-description").innerHTML;
    });

});
