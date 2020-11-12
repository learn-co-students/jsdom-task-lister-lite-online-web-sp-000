class TaskList {
    constructor() {
        this.tasks = [];
    }

    createNewTask(description) {
        const newTask = new Task(description); // creates new Task object/this/proto 
        this.tasks.push(newTask) // push the newly created Task object into tasks array
    }

    renderTasks() {
        return this.tasks.map((task) => task.render()).join("");
        // map over tasks array and render/join arr onto end?
    }


    deleteTask(description) {
        this.tasks = this.tasks.filter((task) => task.description !== description);
    }  
}

// ul where new tasks will live on the DOM
    // const taskUl = document.getElementById("tasks");
    // const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());


// inside TaskList is how we create a Task. aka makes the has_many belongs_to relationship 
