document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('create-task-form')

  form.addEventListener('submit', (event) =>{
    event.preventDefault(); 
    const text = document.getElementById('new-task-description');
    const lists = document.getElementById('tasks');

    todos = document.createElement("li");
    todos.innerText = text.value;
    lists.appendChild(todos);
    event.preventDefault(); 
  })
  
});
