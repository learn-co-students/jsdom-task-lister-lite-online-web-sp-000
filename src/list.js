class List{
  constructor(){
    this.tasks = [];
  }

  createNewTask(description){
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  showTasks(){
    return this.tasks.map((task) => task.show()).join("");
  }

  destroyTask(description){
    this.tasks = this.tasks.filter((task) => task.description !== description);
    
  }
}