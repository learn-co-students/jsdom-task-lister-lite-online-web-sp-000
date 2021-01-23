document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector("#create-task-form")
  let text = document.querySelector("#new-task-description")
  form.addEventListener("submit", (event) => {
      event.preventDefault()
      console.log("form submit", text.value)
  })

  

});
