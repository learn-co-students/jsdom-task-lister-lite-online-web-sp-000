document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


// You're going to need to listen for a submit event on the <form> element.


document.getElementById("create-task-form").addEventListener("submit", formSubmit );



function formSubmit(event) { 
  event.preventDefault(); //event.preventDefault should be at the beginning of functions
  let ul = document.getElementById("tasks"); 
  let li = document.createElement("li"); 
  li.innerHTML += document.getElementById("new-task-description").value;
  li.innerHTML += document.getElementById("new-task-duration").value;
  const buttonElem = document.createElement("button");
  buttonElem.addEventListener("click", (e)=> {buttonClick(e, ul)}) //arrow function way to pass more arguments from this event listener into our function below.
  li.appendChild(buttonElem);
  buttonElem.innerText = 'Delete';
  ul.appendChild(li);

}

function buttonClick(event, ul) { 
  event.target.parentElement.remove();
  
}



