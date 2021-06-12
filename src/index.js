


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //step 1: get form
  const getForm = document.querySelector('#create-task-form')
  //step 2: add event listener submit/click
  getForm.addEventListener("submit", getUserInput)
});


function getUserInput(e) {
  let userInput = document.getElementById("new-task-description").value
  //debugger 
  console.log(userInput)
  e.preventDefault()

  const li = document.createElement('li')
  li.innerText = userInput
  document.getElementById('tasks').appendChild(li)

  document.getElementById("new-task-description").value = ''
}

