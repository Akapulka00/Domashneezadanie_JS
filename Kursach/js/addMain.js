"use strict"

let i=0;
let delMember ;
let login,info,date;
function addElem(event) {
  if(i<5){
  i++;
  let editElem=document.querySelector(".members");
  let Elem=document.createElement("div");
  Elem.innerHTML=`<div class="members flex-row">
  <input type="text" name="nameAutor" id="nameAutor" placeholder="Введите имя участника">
  <input class="Xbutton" type="button" value="X">
</div>`;
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
}

/////////////////////////////////////////////////
function setSuccess(elem){
  elem.nextElementSibling.className = 'message_success';
  elem.nextElementSibling.innerText="";
}
function setUnSuccess(elem){
  let val=elem.value.split('-').reverse();
  let nowDate = new Date();
  nowDate=nowDate.getFullYear()*365+(nowDate.getMonth()+1)*30+nowDate.getDate();
  val=(val[0]*1)+(val[1]*30)+(val[2]*365);
 if(val>=nowDate){
  elem.nextElementSibling.className = 'message_success';
  elem.nextElementSibling.innerText="";
  date=elem.value;
 }else{
   elem.nextElementSibling.innerText ="Вы не можете отправить задание задней датой!"
   elem.nextElementSibling.className = 'message_error';
 }

}
function setError(elem, key){
  let messages = {
      valueMissing: 'Поле должно быть заполнено',
      tooShort: `Минимальное количество символов ${elem.minLength}`,
      tooLong: `Максимальное количество символов ${elem.maxLength}`
  };
  elem.nextElementSibling.innerText = messages[key];
  elem.nextElementSibling.className = 'message_error';
}

const validationForm = document.forms.Filds;
validationForm.elements.taskName.addEventListener('input', function () {
  if (this.validity.valueMissing ) setError(this, 'valueMissing');
  else if(this.validity.tooShort) setError(this, 'tooShort');
  else if (this.validity.tooLong) setError(this, 'tooLong');
  else{setSuccess(this);
      login=this.value;
  }
});
validationForm.elements.taskInfo.addEventListener('input', function () {
  if (this.validity.valueMissing ) setError(this, 'valueMissing');
  else if(this.validity.tooShort) setError(this, 'tooShort');
  else{
    setSuccess(this);
    info=this.value;
  }
});
validationForm.elements.taskDate.addEventListener('input', function () {
  if (this.validity.valueMissing ) setError(this, 'valueMissing');
  else setUnSuccess(this);
});
console.log(validationForm.elements);
validationForm.elements.output.addEventListener('click', function (event) {
  event.preventDefault();
  if(login==validationForm.elements.taskName.value&&info==validationForm.elements.taskInfo.value&&
    date==validationForm.elements.taskDate.value){
      let autors=[];
      let autor=document.getElementsByName("nameAutor");
      for(let element of autor){
        autors.push(element.value);
      }
      console.log(autors)//тут заносим в локальное хранилище

      let data={
        name:login,
        info:info,
        time:date,
        autor:autors
      }
      localStorage.clear();

      let dataBuff=[]
      dataBuff.push(localStorage.getItem("data"));
      dataBuff.push( JSON.stringify(data));
      localStorage.setItem("data", dataBuff);

  }


 /* if (this.validity.valueMissing ) setError(this, 'valueMissing');
  else setUnSuccess(this);*/
});
/*
localStorage.setItem(`login`, `${registrationForm.elements.login.value}`);
console.log(localStorage.getItem("language"));*/
Member();
