document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    let tasksList = document.getElementById("tasks")
    let input = document.querySelector('input').value;
    
    tasksList.innerHTML += "<li id=" + input + ">" + input + " <button data-description=" + input + ">" + "X</button>" + "</li>"
    let el = []

    for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
      el.push(document.getElementById(document.getElementsByTagName("button")[i].getAttribute("data-description")))
      document.getElementsByTagName("button")[i].addEventListener("click", function() {
        
        //console.log(el[i]);

       
          for (let j = 0; document.getElementById("tasks").children.length; j++) {
            //console.log(document.getElementById("tasks").children[j].id)
            if (document.getElementById("tasks").children[j].id == el[i].id) {
              //debugger;
              document.getElementById("tasks").removeChild(document.getElementById("tasks").children[j])
              break;
            }
            //debugger;
          }
          //document.getElementById("tasks").removeChild(document.getElementById("tasks").children[i])

        
        //el.splice(i, 1)
        //debugger;
        //console.log(el);
        //console.log(document.getElementsByTagName("button")[i].getAttribute("data-description"));
        event.preventDefault();
      }, false);
    }
    
    event.preventDefault();
  }, false);



});
