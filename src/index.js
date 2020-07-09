document.addEventListener("DOMContentLoaded", () => {
  
  let form= document.getElementById('create-task-form')
  
  let textBox= document.getElementById('new-task-description')
  let tasks = document.getElementById('tasks')
  form.addEventListener('submit', function(event){
    event.preventDefault()
   
    let list= document.createElement('li')
    list.innerText= textBox.value
    tasks.append(list)
  })
  
});
