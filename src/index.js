document.addEventListener("DOMContentLoaded", () => {
  // your code here
    document.querySelectorAll("input")[1].addEventListener("click", function(event) {
    let node = document.createElement("li")
    let inputField = document.querySelectorAll("input")[0]
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "remove";
    insideLi = inputField.value
    node.innerHTML = insideLi
    node.appendChild(btn)
    btn.addEventListener("click", function(event) {
      let li= btn.parentNode
      li.parentNode.removeChild(li)
    })
    document.querySelector("h2").appendChild(node)
    inputField.value = ""
    inputField.focus()
    event.preventDefault();
}, false);


});



