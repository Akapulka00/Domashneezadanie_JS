"use strict"


let TaskStrings = localStorage.getItem("data");
TaskStrings = JSON.parse(TaskStrings);
console.log(TaskStrings);
for(let elem of  TaskStrings){
elem= JSON.parse(elem);
console.log(elem);
}
