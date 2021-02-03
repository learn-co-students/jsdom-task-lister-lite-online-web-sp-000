document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const ul = document.getElementById("tasks");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    let description = document.getElementById("new-task-description").value;
    let text = document.createTextNode(description);
    let newLi = document.createElement("li");

    let li = newLi.appendChild(text);
    ul.appendChild(li);
  });

});
