// using JUST THIS DOC WILL FULFILL REQUIREMENTS!
// To get this file running again:
// uncomment  <script src="./index.js"></script> in index.html

document.addEventListener("DOMContentLoaded", () => {
// grab DOM el 

  // form input fields
  const taskForm = document.getElementById('create-task-form') // entire form
  const taskDescription = document.getElementById('new-task-description') // input field 

  // UL where new tasks get added
  const taskListUL = document.getElementById("tasks");

  // attach event listener to submit
  taskForm.addEventListener("submit", createNewTask);
      // Test
      // taskForm.addEventListener("submit",function(e){
      //   alert('clicked!' )});
      // });
});

// callbacks
const createNewTask = e => {
  event.preventDefault(); // 1. stop form from trying to submit

  const userInputTaskDescription = document.getElementById('new-task-description') // 2. grab input field data user just submitted. this is duplicate code from above 
  const taskLocation = document.createElement('li') // 3. create a new li node(el) aka where we'll put the task (^^)
  
  taskLocation.innerText = userInputTaskDescription.value; // 4. set inner html to what the user submitted
  
  appendNewTask(taskLocation) // 5. append newTask <li>, onto the List <ul>, aka stick it to the DOM
  event.target.reset(); // 6. clear and reset form input fields
};


const appendNewTask = task => {
  // add const newTask to the ul node
  document.getElementById("tasks").appendChild(task)
};


// Code Explained

// taskLocation.innerText = userInputTaskDescription.value;
    // taskLocation -- existing DOM node, aka where the text will be added
    // userInputTaskDescription -- the user input text we're adding in. 

// document.getElementById("tasks").appendChild(task)
    // document.getElementById("tasks") --existing DOM node, aka where the child is going 
    // appendChild(task) -- what we're appending (aka the passed in const `newTask` from the creatNewTask cb)




// DELIVERABLES
// --> The deliverables require you to handle an event in a form based on clicking a submit button. listen for a submit event on the <form> element
//    [] type a task into the input field.
//    [] to click some form of a submit button.
//    [] the task string that I provided should appear on the DOM after the submit button has been activated.
