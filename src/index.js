

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  let toDoList = document.getElementById('tasks')
  

   
  
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    let inputValue = document.getElementById('new-task-description').value
    let newL = document.createElement('li')


    newL.textContent = inputValue 
    toDoList.appendChild(newL)
      
  //     // your code here
  const removeButton = document.createElement('button')
  removeButton.textContent = 'X'
  removeButton.classList.add('button','button--text')
  newL.appendChild(removeButton)

  removeButton.addEventListener('click', () => {
    newL.remove()
  })
       

  });



});
