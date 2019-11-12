document.addEventListener("DOMContentLoaded", () => {

  createListItem()

});


function createListItem() {

  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()

    let item = document.querySelector('input').value
    let li = document.createElement('li')
    li.innerHTML = item + '<button>x</button>'
    document.getElementById('tasks').appendChild(li)

    document.querySelector('input').value = ""
  })
}
