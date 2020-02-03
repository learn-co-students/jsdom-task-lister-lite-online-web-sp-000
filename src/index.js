document.addEventListener("DOMContentLoaded", () => {
  // your code here


  createItem();

});

function createItem() {

  let taskArray = []

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault()
    let task = document.getElementById("new-task-description").value
    let list = document.querySelector("ul") // => equals list
    taskArray.push("1")
    list.innerHTML += `<li> ${task} </li>`
    console.log(taskArray.length) //could be used in the future for delete button



  })

}
