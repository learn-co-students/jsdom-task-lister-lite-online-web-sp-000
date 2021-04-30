const main = document.quertSelector("main-content")
console.log(main)

const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelectior("#tasks")

taskForm.addEventListener("sumit", function(e){
    e.preventDefault()
    const newTask = document.querySelector("#new-task-description").value
    taskItem.innerText = newTask
    
    taskList.innerHTML += '
    <li> ${newTask} 
    <button data-action="delete"> X </button>
    </li>
    
    '
    taskForm.reset
})

taskList.addEventListener("click", function(e) {
    console.log(e.target)
    if (e.target.dataset.action === "delete"){
        e.target.parentElement.remove()
    }
})