// OO Way 

document.addEventListener("DOMContentLoaded", () => {
// instanciate TaskList 
// inside TaskList is how we create a Task. aka makes the has_many belongs_to relationship 
    const taskList = new TaskList();

// Grab all DOM elements we need

// DOM el: Forms (remember! form is just lowkey one input line here!)
    const newTaskForm = document.getElementById('create-task-form'); // entire form
    const newTaskDescription = document.getElementById('new-task-description'); // input field 

// DOM el: ul, where new tasks get added 
    const taskUl = document.getElementById('tasks');
    const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());


// Event Listeners:

// on submit, add Task to TaskList
    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // alert("hi!")
        // const userInputTaskDescription = document.getElementById('new-task-description') // DO NOT NEED THIS! bc `taskList` vari is `new TaskList` constructor, and it gets passed the input data so it can ma e an Task.  take what the user input and pass it to creatNewTask method
        taskList.createNewTask(newTaskDescription.value);

        e.target.reset(); // reset form 
        renderApp();
    })

// delete
    taskUl.addEventListener("click", (e) => {
        if (e.target.nodeName === "BUTTON") {
        taskList.deleteTask(e.target.dataset.description);
        renderApp();
        }
    });

}) 