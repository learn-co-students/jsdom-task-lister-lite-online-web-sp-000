document.addEventListener("DOMContentLoaded", () => {
  // your code here
function createItem(t){
let node = document.createElement("LI");                 // Create a <li> node
let textnode = document.createTextNode(t);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("tasks").appendChild(node);     // Append <li> to <ul> with id="myList"

}

let f = document.getElementById("create-task-form");
f.addEventListener("submit", (e) => {
  e.preventDefault();
  t = f.elements["new-task-description"]
  createItem(t.value)
  t.value="";
  t.focus();
});
});
