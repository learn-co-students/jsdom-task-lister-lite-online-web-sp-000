/*
Deliverables:
- As a user, I should be able to type a task into the input field.
- As a user, I should be able to click some form of a submit button.
- As a user, the task string that I provided should appear on the 
DOM after the submit button has been activated.
*/

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  handleOnSubmit();
});

function handleOnSubmit() {
  const submit = document.querySelector("input[type=submit]");
  const description = document.getElementById("new-task-description").value;
  submit.addEventListener("click", function (event) {
    document.getElementById("tasks").innerHTML += `<li>${description}</li>`;
    event.preventDefault();
  }, false);
};