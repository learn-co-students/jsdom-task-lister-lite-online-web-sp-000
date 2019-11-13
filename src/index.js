document.addEventListener("DOMContentLoaded", () => {
  let frm=document.forms['create-task-form']

  frm.addEventListener('submit',function(e){
    e.preventDefault();
    let val=document.querySelector('#new-task-description').value;
    let btn=document.querySelector('input[type="submit"]');
    let li=document.createElement('li')
    document.querySelector('ul').appendChild(li)
    li.innerText=val;
    let delbtn=document.createElement('button')
    li.appendChild(delbtn)
    delbtn.innerText="X"
    delbtn.addEventListener('click', function(e){
      li.remove();
    })
    let dropdown= document.querySelector('select')
    if (dropdown.value=='red') {
      li.style.color='red';
    } else if (dropdown.value=='yellow') {
      li.style.color='yellow';
    }
    else {
      li.style.color='green';
    }

  })


});
