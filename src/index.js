document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("create-task-form")
    let textBox = document.getElementById("new-task-description")
    let tasks = document.getElementById("tasks") //ul
    let btn = document.createElement("BUTTON")

    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("button clicked");
        let li = document.createElement("li");
        btn.innerHTML = 'x';
        li.innerText = `${textBox.value}  `  //form.innerText
        tasks.append(li)
        li.append(btn)

        btn.addEventListener("click", function(event) {
            console.log("button clicked")
            li.remove()
        })

    })
})