document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  const taskList = document.getElementById('tasks')
  const li = document.getElementById('li')

  form.addEventListener('submit', function(event) {
    
    event.preventDefault()

    let inputTag = document.querySelector('input#new-task-description')
    let inputValue = inputTag.value

    let newLi = document.createElement('li');
    newLi.innerText = inputValue

    let ulTag = document.querySelector('ul#tasks')
    ulTag.append(newLi)
    inputTag.value = ''
  })

  // function removeTask(task) {
  //   if (task.target.nodeName === 'BUTTON'){
  //     if (confirm('Are you sure?')){
  //       let li = task.target.parentElement
  //       taskList.removeChild(li)
  //     }
  //   }
  // }
});
