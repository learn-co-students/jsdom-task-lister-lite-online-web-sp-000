document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', onSubmit)
});

function onSubmit(e){
  e.preventDefault()

  const newTask = document.querySelector('input').value
  let newLi = document.createElement('li')
  newLi.innerHTML = newTask

  document.querySelector('#tasks').appendChild(newLi)
  document.querySelector('input').value = ""
}
