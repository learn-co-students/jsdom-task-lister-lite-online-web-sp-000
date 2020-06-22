document.addEventListener("DOMContentLoaded", () => {

  const b = document.getElementById("button")
  const form = document.getElementById("create-task-form")


  b.addEventListener("click", function(event){
    event.preventDefault();
    let task = document.getElementById("new-task-description").value;
    let div = document.createElement('div')
      div.id = 'list'

    document.body.appendChild(div)
    let ul = document.createElement('ul')

      let li = document.createElement('li')
      li.innerText = task
      ul.appendChild(li)
      div.appendChild(ul)

      arr = document.querySelectorAll('li')
      arr.forEach(function(ele, i) {
        ele.setAttribute("id", 'item' + (i + 1));
      })
    }
  );
});
