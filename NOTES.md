  // grab necessary DOM elements -- what are those? (see below)
  // get form and relevant input fields (create-task-form, new-task-description, new-task-priority)
    // the form 
    // the text box
    // something with the id 'new-task-priority' (I feel like that's an extra bit I don't need right now)
  // save ul where new tasks will live to a constant
  // (taskUl.innerHTML = taskList.renderTasks()) ????
  // add event listener to newTaskForm
    // when submit button is pressed
    // prevent default (i.e., submitting the page; we don't want that function for the submit button in this case)
    // taskList.createNewTask(newTaskDescription.value)

      // => so we prevent the submit event from executing default action so we don't lose text in new-task-description
      // => then we take that value and make a new task with it, thats then added to DOM element stored in the constant 'taskList'

// what does the taskList() function do?
  // => just initializing the class; 
  // define the class and its functions, then initialize the class with the constructor() function
  // in this case, sets the initial value of the field 'tasks' for the constant 'taskList' to an empty array
  // constructor() initializes an instance of the function
  // in our case, that instance is saved in the constant 'taskList' and it has tasks as well as functions that can be called on it

// createNewTask() is a TaskList instance method 
  // description argument (desc taken from value of new-task-description)
  // creates a constant named 'newTask' set to a new instance of Task with same description as argument 
  // then, newTask is pushed onto 'this' (in this case, the taskList constant's) 'tasks' array

// Task is another class
  // its constructor() method takes in an argument of description
  // it then sets the description attribute / property of the Task instance to the given description

  // also has a render() function
    // <li> element with inner text set to 'this.description' and a delete button (which we'll get into later)

// now that I understand the functions, I feel comfortable trying to do the same without the classes and functions, then refactoring

// declaring taskList and taskUl constants is for the renderApp() function

// PROCESS 

  // (section I)

  // 1) grab form and text box
  // 2) set up event listener for submit button
  // 3) prevent default action for event
  // 4) create a new task (<li>) with description (innerText) set to value of text box element
  // 5) reset the form (e.target.reset() => 'e' is "submit"; 'target' is the form)