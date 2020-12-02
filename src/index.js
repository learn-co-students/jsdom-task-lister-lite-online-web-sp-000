document.addEventListener("DOMContentLoaded", () => {
    // your code here

    const taskForm = document.getElementById("create-task-form");
 
    taskForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const taskText = document.getElementById("new-task-description");
        const taskUl = document.getElementById("tasks");
        const taskLi = document.createElement("li");
        taskLi.innerText = taskText.value;
        taskUl.appendChild(taskLi);
        e.target.reset()
    })
});
