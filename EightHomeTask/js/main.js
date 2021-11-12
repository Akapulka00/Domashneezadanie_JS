"use strict"

let logins=new Map();
logins.set("Akapulka00","Volhov")
.set("Korobec","SPB")
.set("Verunda","SPB")
.set("PainFiil","Pskov")
.set("Arbuzec","Astrahan")
.set("Luna","Murmansk")
.set("Katonok","Ozersk");


function pervoe( map, city ){
  let newArr=[];
for(let elem of map){
  if((elem[1].toLowerCase()) === (city.toLowerCase())){
      newArr.push(elem[0]);
  }
}
return(newArr);
}




function vtoroe(arrString){
  let arrBuf=[];
  let i=0;
  let countStrings=new Map();
  for(let elem of arrString){
    for(let prow of arrString){
      if(elem==prow){
        i++;
        countStrings.set(prow,i);
      }
    }
    i=0;
  }
console.log(countStrings);
}


let customerMap = new Map();
         customerMap.set(45, {name: "Павел", id: 45, age: 23});
         customerMap.set(87, {name: "Олег", id: 87, age: 45});
         customerMap.set(91, {name: "Максим", id: 91, age: 18});
         customerMap.set(99, {name: "Евгения", id: 99, age: 66});
         customerMap.set(101, {name: "Алексей", id: 101, age: 34});
         customerMap.set(112, {name: "Клара", id: 112, age: 39});

function trete(maap,ageFrom,ageTo){
  let newMap=new Map();
  for(let elemmap of Maap){
    if(elemmap[1].age>=ageFrom && elemmap[1].age<ageTo)
    {
    NewMap.set(elemmap[0],elemmap[1]);
    }
  }
return NewMap;
}

let string=["asd","fas","napsd","asd","fas","napsd","asd","fas","napsd"];
console.log(pervoe(logins,"SPB"));
console.log(vtoroe(string));
console.log(trete(customerMap,45,80));
