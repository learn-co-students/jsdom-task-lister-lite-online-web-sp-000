document.addEventListener("DOMContentLoaded", () => {
  //select part of doc want to focus on
  const myForm = document.getElementById("create-task-form")

  //create dropdown for prriority and otpions
  const selectDropdown = document.createElement("select")
  myForm.children[1].insertAdjacentElement('afterend', selectDropdown)

  const highOption = document.createElement("option")
  highOption.innerText = "High"
  selectDropdown.append(highOption)

  const medOption = document.createElement("option")
  medOption.innerText = "Medium"
  selectDropdown.append(medOption)

  const lowOption = document.createElement("option")
  lowOption.innerText = "Low"
  selectDropdown.append(lowOption)

  //event listener for submit
  myForm.addEventListener("submit", handleFormSubmit)

  //handle submit
  function handleFormSubmit(e){
    e.preventDefault()
    const newItem = e.target["new-task-description"].value
    //get priority info
    const priorityLevel = e.target.children[2].value
    //get priority color
    const color = priorityColor(priorityLevel)

    //pull out locatin of list
    const taskUL = document.querySelector("#tasks")

    //add delete button and handle
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"
    deleteBtn.addEventListener("click", handleDelete)

    //add new item to list 
    const LI = document.createElement("li")
    LI.style.color = color
    LI.textContent = newItem
    LI.append(deleteBtn)

    taskUL.appendChild(LI)
    
    //clear input box
    e.target.reset()
  }

  function handleDelete(e){
    e.target.parentElement.remove()
  }

  function priorityColor(priority){
    if (priority === "High") {
      return "red"
    } else if (priority === "Medium") {
      return "orange"
    } else {
      return "green"
    }
  }

});



