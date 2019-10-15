document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.querySelector("#create-task-form input[type='submit']")

  submit.addEventListener("click", event => {
    event.preventDefault()

    let newTask = document.getElementById( 'new-task-description' ).value
    let taskList = document.getElementById( 'tasks' )
    let newElement = document.createElement( 'li' )
    let newButton = document.createElement( 'button' )

    newElement.textContent = newTask
    newButton.setAttribute( 'data-description', newTask )
    newButton.textContent = 'X'
    newButton.addEventListener("click", event => {
      event.currentTarget.parentNode.remove()
    })

    newElement.appendChild( newButton )
    taskList.appendChild( newElement )

  })

});
