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

/////////////////////////////////////////////////
function setSuccess(elem){
  elem.nextElementSibling.innerText = 'Поле заполнено верно';
  elem.nextElementSibling.className = 'message success active';
}
function setError(elem, key){
  let messages = {
      valueMissing: 'Поле должно быть заполнено',
      tooShort: `Минимальное количество символов ${elem.minLength}`,
      tooLong: `Максимальное количество символов ${elem.maxLength}`
  };
  elem.nextElementSibling.innerText = messages[key];
  elem.nextElementSibling.className = 'message error active';
}

const validationForm = document.forms.Filds;
console.log(validationForm);
validationForm.elements.taskName.addEventListener('input', function () {
  if (this.validity.valueMissing /*required*/) setError(this, 'valueMissing');
  else if(this.validity.tooShort/*minlength="3"*/) setError(this, 'tooShort');
  else if (this.validity.tooLong/*maxlength="20"*/) setError(this, 'tooLong');
  else setSuccess(this);
});
