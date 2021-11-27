"use strict"

let prises = {
  headphones: "Наушники",
  book: "Книга",
  postcard: "Открытка"
};


function generateField(n=3){
  if(n<3){
    n=3;
  }

 let arrRand=[],obj=[];
 obj=Object.values(prises);
 console.log(obj)
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
      yach.innerText=`${obj[k]}`;
      k++;
    }
    count++;
  }
}
createdfield.append(table);
}

generateField(3);
