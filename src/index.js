document.addEventListener("DOMContentLoaded", () => {
  // your code here


    //append child to id tasks, the innerHTML should be copied from id="new-task-description" 
    function updateTodoList(content) {
      let liTaskItem = document.createElement("li")
      liTaskItem.innerHTML = content; 
      let list = document.querySelector("div#list ul")
      list.appendChild(liTaskItem)
    };








  //event listener for form submit or click submit button
  let form = document.getElementById("create-task-form")

  function handleFormSubmit() {
    event.preventDefault();
    let newTask = document.getElementById("new-task-description");
    updateTodoList(newTask.value);
  } 

  form.addEventListener('submit', handleFormSubmit )




});
