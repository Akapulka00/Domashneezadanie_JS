"use strict"

let animals = [
  {
     "name": "Люся",
     "age": "1 год",
     "color": "трехцветная",
     "additional_info": {"vaccinations": true, "passport": true}
  },
  {
     "name": "Том",
     "age": "3 месяца",
     "color": "белый",
     "additional_info": {"vaccinations": false, "passport": false}
  },
  {
     "name": "Макс",
     "age": 2,
     "color": "серый",
     "additional_info": {"vaccinations": false, "passport": true}
  },
  {
     "name": "Василий",
     "age": 3,
     "color": "черный",
     "additional_info": {"vaccinations": true, "passport": true}
  }
];

function vtoroe(animals){
 let box= document.querySelector(".animal-box");
 for(let elem of animals){
  let animal=document.createElement("div");
  animal.classList.add("animal__box_cart");
  let name=document.createElement("p");
  name.innerText=`Кличка: ${elem.name}`;
  let age=document.createElement("p");
  age.innerText=`Возраст: ${elem.age}`;
  let color=document.createElement("p");
  color.innerText=`Цвет: ${elem.color}`;
  let vaccinations=document.createElement("p");
  let passport=document.createElement("p");
  let buffTxt;

  if(elem.additional_info.vaccinations){
    buffTxt='Есть'
  }else{
    buffTxt='Нет'
  }
  vaccinations.innerText=`Вакцинация: ${buffTxt}`;
  if(elem.additional_info.passport){
    buffTxt='Есть'
  }else{
    buffTxt='Нет'
  }
  passport.innerText=`Паспорт: ${buffTxt}`;
  animal.append(name,age,color,vaccinations,passport);
  box.append(animal);
 }
}
vtoroe(animals);
