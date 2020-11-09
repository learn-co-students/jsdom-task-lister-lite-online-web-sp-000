document.addEventListener("DOMContentLoaded", () => {
  
  
  // find the target form element
  let form = document.getElementById("create-task-form")
  
  // listen to submit event to the form found.
  // upon clicking submit:
  // 1. stop normal post behavior 2.get task from input value 3. create node w/value 
  // 4. find target insert location(parent) 5.attached newly created node to the parent
  form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let task = document.getElementById("new-task-description").value
    let li = document.createElement("li")
    let textNode = document.createTextNode(task)
    let button = document.createElement("button")
    button.textContent = 'X'
    li.appendChild(textNode)
    li.appendChild(button)
    let ulElement = document.getElementById("tasks")
    ulElement.appendChild(li)
    
  })
});

let button = document.getElementsByTagName('button')
document.addEventListener('click',()=>{
  

})
