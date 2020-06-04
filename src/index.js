document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //prevents the form from being submitted 
  document.getElementById("create-task-form").addEventListener("submit", function(event){

  let text = document.getElementById("new-task-description").value;

  //creates LI node
  let node = document.createElement("LI");
  //creates text node
  let textNode = document.createTextNode(text);
  //appends the text node to the LI node
  node.appendChild(textNode);
  //appends the LI node to the list
  document.getElementById("tasks").appendChild(node);

  event.preventDefault()
  }, false);

});
