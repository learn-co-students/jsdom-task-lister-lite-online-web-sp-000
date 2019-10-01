document.addEventListener("DOMContentLoaded", () => {
  let submit_button = document.querySelector("input[type=submit]")
  submit_button.addEventListener("click", function(event) {
    event.preventDefault()
    let li = document.createElement('li')
    let input = document.querySelector("input#new-task-description")
    li.innerHTML = `${input.value}<button>x</button>`
    document.querySelector("ul#tasks").appendChild(li)
    input.value = ""
    let x_buttons = document.querySelectorAll("button")
    x_buttons.forEach(function(element) {
      element.addEventListener("click", function() {
        element.parentElement.remove()
      })
    })
  })
})
