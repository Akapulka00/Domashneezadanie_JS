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
if(typeof(form)=="number" && typeof(to)=="number" && typeof(obj)=="object"){
for (let elem in obj) {
  if(obj[elem].price>from && obj[elem].price<price){
    newObj[elem]=obj[elem];
  }
  return newObj;
}
}else{
  return false
}

}
console.log(pervoe(goods,1,1000));
pervoe(goods,1,1000);
