document.addEventListener("DOMContentLoaded", () => {
  
  
  // find the target form element
  let form = document.getElementById("create-task-form")
  let taskElement = document.getElementById("new-task-description")
  let input = document.createElement("input")
  input.type = "text"
  input.id = "taskOwner"
  taskElement.after(" By ", input)

  let taskOwner = document.getElementById("taskOwner")
  
  // listen to submit event to the form found.
  // upon clicking submit:
  // 
  form.addEventListener("submit", (event)=>{
    //1.stop normal behavior
    //2.create li element
    //3.li append child textnode via inner HTML
    //4.create button element
    //5.li appendChild button
    //6.Find parent node to attached li

    event.preventDefault() 
    let task = document.getElementById("new-task-description").value
    let li = document.createElement("li")
    let button = document.createElement("button")
    button.textContent = 'X'
    li.innerHTML=task + " by " + input.value
    li.appendChild(button)
    let ulElement = document.getElementById("tasks")
    ulElement.appendChild(li)
    
    //listen to click event to button. remove li upon click
    button.addEventListener('click',()=>{
      li.remove()
})  
    
    // reate select element.
    //create option elements and select.apppend option as children
    select = document.createElement("select")
    select.id = "priority"
    select.name = "priority"
    const color = ["select a color", "green","red","yellow"]
    for (let i=0; i<4 ;i++){
      let option = document.createElement("option")
      option.value = color[i]
      option.innerHTML=color[i]
      select.appendChild(option)
    }
    
    //li prepend select
    li.prepend(select)
    
    //listen to change event on select.upon selece, li style color change to selected color
    select.addEventListener('change',(event)=>{
      let color = event.target.value
      li.style.backgroundColor = color
      li.className = color

    let lis = document.getElementsByTagName("li")
    let lowPriority=[]
    let midPriority=[]
    let highPriority=[]
      
    for(let i=0; i<lis.length; i++){
      if (lis[i].className == "green"){
        
        lowPriority.push(lis[i])
      }
       
      else if(lis[i].className == "yellow"){
       
        midPriority.push(lis[i])
        
      }
      else if(lis[i].className == "red"){
        
        highPriority.push(lis[i])
        
      }
      
    }

    lis = [...lowPriority,...midPriority,...highPriority]
    
  

    for(let i=0;i<lis.length;i++){
      ulElement.prepend(lis[i])
    }
  })


});


