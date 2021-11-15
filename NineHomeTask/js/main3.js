"use strict"


let articles = [
  {
      id: 1,
      title: "JS",
      text: "About JS",
      author: "Max"
  },
  {
      id: 2,
      title: "PHP",
      text: "About PHP",
      author: "Ivan"
  },
  {
      id: 3,
      title: "DataBase",
      text: "About DB",
      author: "Paul"
  },
  {
      id: 4,
      title: "HTML",
      text: "About HTML",
      author: "Paul"
  }
];

let goods = [
  {
      title: "Piano",
      price: 3000,
      count: 25
  },
  {
      title: "Guitar",
      price: 1200,
      count: 40
  },
  {
      title: "Drum",
      price: 2700,
      count: 12
  },
  {
      title: "Flute",
      price: 900,
      count: 50
  },
  {
      title: "Harp",
      price: 3400,
      count: 5
  }
];

function generateTable(masObj){
  let tableBox=document.querySelector(".table-box");
  let table=document.createElement("table");
  let flag=1;
  let buff;
  for(let elem of masObj){
    let yach;
    let row = table.insertRow();
    if(flag==1){
    for(let stolb in elem){
      yach=row.insertCell();
      yach.innerText=`${stolb.toUpperCase()}`;

    }
     row = table.insertRow();
      for(let stolb in elem){
      yach=row.insertCell();
      yach.innerText=`${elem[stolb]}`;
    }
    flag--;
  }else{
    for(let stolb in elem){
      yach=row.insertCell();
      yach.innerText=`${elem[stolb]}`;
    }
  }
  }
  let div=document.createElement("div");
  tableBox.append(table,div);
  let tr=table.getElementsByTagName("tr");
  tr[0].style.cssText =
  " background:#b39ddb; font-weight: bold;";

  for(let i=1; i<masObj.length+1; i++){
    if(i%2){
      tr[i].style.cssText =
  " background:#ede7f6;";
    }
  }
}
generateTable(articles);

generateTable(goods);
