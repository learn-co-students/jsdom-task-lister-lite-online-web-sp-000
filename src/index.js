document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector('form');
  element.addEventListener('submit', event => {
    event.preventDefault();
    const desc = document.getElementById("new-task-description").value;
    const node=document.createElement("LI");
    const textnode=document.createTextNode(desc);
    node.appendChild(textnode);
    document.getElementById("tasks").appendChild(node);
  });
});




