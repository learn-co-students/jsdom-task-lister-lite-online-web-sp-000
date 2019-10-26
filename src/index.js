document.addEventListener("DOMContentLoaded", () => {
  // your code here

const textForm = document.querySelector("#create-task-form")
const textInput = document.getElementById("new-task-description")
const unorderedList = document.querySelector("#tasks")

  textForm.addEventListener('submit', () => {
    event.preventDefault()
    console.log(textInput.value)
    const taskLi = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "Delete"
    const formValue = textInput.value
   taskLi.innerText = formValue
    unorderedList.appendChild(taskLi)
    taskLi.appendChild(deleteButton)
    deleteButton.addEventListener('click', (event) => {
      if (event) {
        taskLi.remove()
      }
    })

    textForm.reset() 
  
   
    
    

  })

  

  

});
