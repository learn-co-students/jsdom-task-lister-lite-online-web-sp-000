document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  let list = document.getElementById('tasks')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let content = document.querySelector('input').value
    let li = document.createElement('li');
    li.textContent = content;
    list.appendChild(li)

  })

  list.addEventListener('click', (e) => {
    let item = e.target
    item.parentNode.removeChild(item)
  })
});
