"use strict"
let TaskStrings = localStorage.getItem("data");
TaskStrings = JSON.parse(TaskStrings);
if(TaskStrings.length==0){
  let tasks=document.querySelector(".task_container");
  tasks.classList.add("task_zero");
  let smile=document.createElement("div");
  smile.classList.add("to_he_rollen");
  smile.innerHTML=`
  <img src="/img/1.jpg" alt="Пусто">
  `;
  tasks.append(smile);
}
let flagColor=-1,index=0;
for(let elem of  TaskStrings){
elem= JSON.parse(elem);
let tasks=document.querySelector(".task_container");
let task=document.createElement("div");
let autors=elem.autor.join();
task.classList.add("el_of_task");
if(flagColor==-1){
  task.classList.add("task_collor_grey");
  task.classList.remove("task_collor_black");
  flagColor*=-1;
}else{
  task.classList.add("task_collor_black");
  task.classList.remove("task_collor_grey");
  flagColor*=-1;
}
task.innerHTML=`
<div data-index="${index}" class="Conteiner" >
<div class="taskAutor">
<h2 class="line">${elem.name}</h2>
<p class="line ">Автор:${autors}</p>
</div>
<p>${elem.info}</p>
<p class="line">Выполнить к: </p>
<p class="line bold">${elem.time.split("-").reverse().join(".")}</p>
</div>
`;
tasks.append(task);
task.addEventListener("click", function(){
  if(!(this.classList.contains ( "task_selected"))){
    this.classList.add("task_selected");
  }else{
    this.classList.remove("task_selected");
  }

})
index++;
}
let button = document.querySelector(".button_delete");
button.addEventListener("click", function(){
  let selected=document.querySelectorAll(".task_selected");

  for(let elem of selected){
    let i=elem.firstElementChild.getAttribute("data-index");
    delete TaskStrings[i];
  }
TaskStrings=TaskStrings.filter(element => element !== null);
  console.log(TaskStrings);
  localStorage.clear();
  localStorage.setItem("data", JSON.stringify(TaskStrings));
  location.reload();
})

