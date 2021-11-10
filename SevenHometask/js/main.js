"use strict"

let goods = {
  piano: {
    title: "Пианино",
    price: 3000,
    count: 25
  },
  guitar: {
    title: "Гитара",
    price: 1200,
    count: 40
  },
  drum: {
    title: "Барабаны",
    price: 2700,
    count: 12
  },
  flute: {
    title: "Флейта",
    price: 900,
    count: 50
  },
  harp: {
    title: "Арфа",
    price: 3400,
    count: 5
  }
};

function pervoe(obj,from,to){
  let newObj={};
if(typeof(from)=="number" && typeof(to)=="number" && typeof(obj)=="object"){
for (let elem in obj) {
 if(obj[elem].price>from && obj[elem].price<to){
    newObj[elem]=obj[elem];
  }
 
}
return newObj;
}else{return false}
}
//////////////////////////////////////////////////////////////////////////////////
function vtoroe(obj,title,countToCart){
  
if(typeof(countToCart)=="number" && typeof(title)=="string" && typeof(obj)=="object"){
  for (let elem in obj) {
    if(obj[elem].title==title){
       if(obj[elem].count-countToCart>0){
        obj[elem].count=obj[elem].count-countToCart;
        return true;
       }else{
         console.log("Значение не возможно уменьшить!");
          return false}
     }
    
   }
   console.log("Инструмента с таким названием не существует!");
   return false;
}else{
  return false;
}
}
/////////////////////////////////////////////////
let books = [
  { author: 'Пушкин', title: 'Пир во время чумы'}, 
  { author: 'Толстой', title: 'Война и мир'}, 
  { author: 'Лермонтов', title: 'Тамань'}, 
  { author: 'Гончаров', title: 'Обломов'}, 
  { author: 'Лермонтов', title: 'Герой Нашего Времени'}, 
  { author: 'Пушкин', title: 'Руслан и Людмила'}, 
  { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function trete(obj,autor){
let newBooks=[];
for(let elem of obj){
  if(elem.author==autor){
    newBooks.push(elem)
  }
}
//console.log(newBooks);
return newBooks;
}


console.log(pervoe(goods,1000,1300));
console.log(vtoroe(goods,"Флейтаf",25));
console.log(trete(books,"Лермонтов"));