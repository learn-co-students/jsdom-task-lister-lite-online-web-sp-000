

    // get all DOM elements:
    let taskForm = document.getElementById("create-task-form");
    let input = document.getElementById("new-task-description");
    let tasksList = document.getElementById("tasks");

    // event listener
    document.addEventListener("DOMContentLoaded", () => {

        // click a submit button
        taskForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let li = document.createElement("li");
            // task string should appear on the DOM after the submit button has been activated
            li.innerText = input.value;
            tasksList.appendChild(li);
            input.value = "";
        });
    });



