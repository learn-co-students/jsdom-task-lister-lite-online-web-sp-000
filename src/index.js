document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const submitForm = document.getElementById("create-task-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let listOfTasks = document.getElementById("tasks");
        let task = document.getElementById("new-task-description").value;
        let row = document.createElement("li");
        row.innerText = task;
        listOfTasks.appendChild(row);

    })
});
