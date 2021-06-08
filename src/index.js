// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   let submit = document.getElementById("create-task-form").querySelectorAll('input')[1];
//   submit.addEventListener("click", function(event) {
//     event.preventDefault();
//     let input = document.getElementById("create-task-form").querySelectorAll('input')[0];
//     let ul = document.getElementById('tasks');
//     let li = document.createElement('li');
//     li.innerHTML = input.value;
//     ul.appendChild(li);
//     let button = document.createElement('button');
//     button.innerHTML = "X";
//     li.appendChild(button);
//     button.addEventListener("click", function() {
//       if (li.innerText === "X") {
//         Array.from(ul.querySelectorAll('li')).filter( y => y.innerText === "X").forEach( x => x.remove())
//       } else {
//       li.remove();
//       }
//     });
//     input.value = null;
//   }); 
// });



// Another solution

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementById("create-task-form").querySelectorAll('input')[1];
  submit.addEventListener("click", function(event) {
    event.preventDefault();
    let input = document.getElementById("create-task-form").querySelectorAll('input')[0];
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    let button = document.createElement('button');
    button.innerHTML = "X";
    li.appendChild(button);
    button.addEventListener("click", function() {
      handleButton(ul, li);
    })
    input.value = null;
  }); 
});

function handleButton(ul, li) {
  console.log(ul, li)
  if (li.innerText === "X") {
    Array.from(ul.querySelectorAll('li')).filter( y => y.innerText === "X").forEach( x => x.remove())
  } else {
  li.remove();
  }
}