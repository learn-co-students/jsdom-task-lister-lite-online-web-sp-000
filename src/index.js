document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('[type=submit]').addEventListener("click", function(event){
    event.preventDefault();
  });
    document.querySelectorAll('[type=submit]').addEventListenter("click", function(event){
      let input = document.getElementById("new-task-description").value;

      let tasks = document.getElementById("tasks");
      let li = tasks.appendChild("li");
      li.innerText = input;
  });

});
