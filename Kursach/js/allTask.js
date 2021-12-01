"use strict"


let TaskStrings = localStorage.getItem("data");
TaskStrings = JSON.parse(TaskStrings);
console.log(TaskStrings);
for(let elem of  TaskStrings){
elem= JSON.parse(elem);
let tasks=document.querySelector(".task_container");
let task=document.setItem("div");
task.classList.add("el_of_task");
console.log(elem);
}
