"use strict"

let i=0;
let delMember ;
function addElem(event) {
  if(i<5){
  i++;
  let editElem=document.querySelector(".members");
  let Elem=document.createElement("div");
  //Elem.classList
  Elem.innerHTML=`<div class="members flex-row">
  <input type="text" name="nameAutor" id="nameAutor" placeholder="Введите имя участника">
  <input class="Xbutton" type="button" value="X">
</div>`;
console.log(i);
editElem.append(Elem);
delMember =document.querySelectorAll(".Xbutton");
delMember.forEach(element => {
  element.addEventListener('click',delElem);
});
  }
}
function delElem(event) {
  let head=event.target.parentNode;
  head.innerHTML=" ";
  i--;
}

function Member(){
  let addMember =document.querySelector(".button_members");
  addMember.addEventListener('click',addElem);
  console.log(delMember);
}
Member();

