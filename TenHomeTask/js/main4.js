"use strict"

let prises = {
  headphones: "Наушники",
  book: "Книгу",
  postcard: "Открытку"
};

let obj=[];
obj=Object.values(prises);
 console.log(obj)
function generateField(n=3){
  if(n<3){
    n=3;
  }

 let arrRand=[];
 for(let i=0;i<3;i++){
   let numRand=Math.floor(Math.random()*(n*n));
   if(arrRand.includes(numRand)){// исключение при наличии одинаковых индексов
    i--;
   }else{
   arrRand.push(numRand);
   }
 }
 console.log(arrRand);
  let count=0,k=0;
let createdfield=document.querySelector(".generate-field");
let table=document.createElement("table");
table.classList.add("created__tabe");
table.style.cssText=`border-collapse: collapse; table-layout: fixed; width: 100%; `
for(let j=0;j<n;j++){
  let yach;
  let row = table.insertRow();
  for(let i=0; i<n; i++){
    yach=row.insertCell();
    if(count==arrRand[0]||count==arrRand[1]||count==arrRand[2]){

      k++;
    }
    count++;
  }
}
createdfield.append(table);
return arrRand;
}
let result=generateField(3);
let gameFilds=document.querySelectorAll(".created__tabe td");
let counthod=0,flag=1;
for (let gameFild of gameFilds) {
  gameFild.addEventListener('click', function game(){
    if(flag!==0){
    if(gameFilds[result[0]]===gameFild||gameFilds[result[1]]===gameFild||gameFilds[result[2]]===gameFild){
      let win=()=>{return Math.floor(Math.random()*3)}
      this.innerText=`Вы выйграли ${obj[win()]} `;
    }else
    this.innerText=`Пусто!`;
    counthod++;
    if(counthod===3){
      flag=0;
    }
    let schet=document.querySelector(".kol-hod");
    schet.innerText=` ${3-counthod}`;
  }
});
}

