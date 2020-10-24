document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("list");
  let taskForm = document.getElementById("create-task-form");
  let taskDescription = document.getElementById("new-task-description");

  taskForm.addEventListener("submit", function (event) {
    // listen for the submit button
    let li = document.createElement("li");
    li.id = "task";
    let del = document.createElement("button");
    del.innerText = "Delete";
    li.innerHTML = taskDescription.value; // new li inner HTML will be the new form input text field description value
    ul.appendChild(li); // append the li to the ul list
    li.appendChild(del);

    del.addEventListener("click", (event) => {
      let grab = document.getElementById("task");
      grab.remove();
    });
    event.preventDefault(); // do not allow redirect, instead update the page
    // event.target.reset();
  });
});
