document.addEventListener("DOMContentLoaded", () => {
  // 1. set user input as variable to user later
  // 2. set form as variable to use later
  // 3. pull the value after the submit button clicked by the user
  // 4. listen to when the form is submitted and do the following
  // 5. set the taskInput value as a variable to use later
  // 6. create a variable of list to append to later
  // 7. create element li
  // 8. make the innerText of newLi the newTask variable
  // 9. appendChild of newLi to list
  
  const taskInput = document.querySelector("#new-task-description")
  
  const taskForm = document.querySelector("#create-task-form")
  
  taskForm.addEventListener('submit', function(e) {
    
    e.preventDefault() // prevent the default form submit
    // console.log('test') // always test your code
    
    const newTask = taskInput.value
    const list = document.querySelector("#tasks")
    const newLi = document.createElement('li')
    newLi.innerText = newTask
    list.appendChild(newLi)
  
    taskForm.reset() // reset the column once submit
  })
});
