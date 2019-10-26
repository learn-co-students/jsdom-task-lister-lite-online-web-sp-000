document.addEventListener("DOMContentLoaded", () => {
  // your code here

const textForm = document.querySelector("#create-task-form")
const textInput = document.getElementById("new-task-description")
const unorderedList = document.querySelector("#tasks")
const listDiv = document.querySelector("#list")


  textForm.addEventListener('submit', () => {
    event.preventDefault()
    console.log(textInput.value)
    const taskLi = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete'
    deleteButton.innerText = "Delete"
    const formValue = textInput.value
   taskLi.innerText = formValue
    unorderedList.appendChild(taskLi)
    taskLi.appendChild(deleteButton)
    
    // if (event.target === )

    textForm.reset() 

    unorderedList.addEventListener('click', (event) => {
      if (event.target.className === 'delete') {
        event.target.parentNode.remove()
      }
    })

  }) //close of textForm event listener

  

  

  

}); // close of window event listener
