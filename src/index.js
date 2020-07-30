document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector('input[type="submit"]').addEventListener("click", function (event) {
    let value = document.getElementById("new-task-description").value;
    event.preventDefault()
    let node = document.createElement("li");               
    let text = document.createTextNode(value); 
    let button = document.createElement("button")
    node.id = value
    button.id = value.toUpperCase()
    button.innerHTML = "x"
    node.appendChild(text);
    node.appendChild(button);
    document.getElementById("tasks").appendChild(node);

    let target_button = document.getElementById(value.toUpperCase())
    target_button.addEventListener('click', function (event) {
    let parent_id = target_button.parentNode.id
    document.getElementById(parent_id).remove()
  })
  })
  
});
