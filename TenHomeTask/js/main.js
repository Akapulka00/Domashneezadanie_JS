"use strict"

let goods = {
  piano: {
      title: "Пианино",
      price: 3000,
      count: 0,
      img: "https://picsum.photos/id/345/1000"
  },
  guitar: {
      title: "Гитара",
      price: 1200,
      count: 40,
      img: "https://picsum.photos/id/988/1000"
  },
  drum: {
      title: "Барабаны",
      price: 2700,
      count: 12,
      img: "https://picsum.photos/id/123/1000"
  },
  flute: {
      title: "Флейта",
      price: 900,
      count: 0,
      img: "https://picsum.photos/id/162/1000"
  },
  harp: {
      title: "Арфа",
      price: 3400,
      count: 5,
      img: "https://picsum.photos/id/163/1000"
  }
};

function addMusic(){
  let cardsSection = document.querySelector(".cards-section");
  cardsSection.classList.add("flex-row")
// [{}, {}, {}, {}, {}]
Object.values(goods).forEach((obj)=>{
    let card = document.createElement("div");
    card.classList.add("card","col-5");

    let title = document.createElement("h2");
    title.innerText = obj.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", obj.img);

    let price = document.createElement("p");
    price.innerText = `${obj.price} руб.`;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (obj.count > 0) {
        count.innerHTML = `
            <button>-</button>
            <span>0</span>
            <button>+</button>
        `;
    } else {
        count.innerHTML = "<span>Нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
});

}
addMusic();
let Button=document.querySelector(".card__count-info button");
let icount=0;
let countUPButtons =document.querySelectorAll(".card__count-info");
for(let countUPButton of countUPButtons){

  let massBatton= countUPButton.children;
  console.log(massBatton);
  if(massBatton.length>1){
    let countGoods=0;
    function getObj(){
      let ii=icount,j=0;
      for(let good in goods){
        if(j===ii){
        return  goods[good];
        }
        j++;
      }
    };
    let good=getObj();

    massBatton[0].addEventListener('click',function(){
      if((countGoods-1)<0){

      }else{
        countGoods--;
        massBatton[1].innerText=`${countGoods}`;
      }
    }
    );
    massBatton[2].addEventListener('click',function(){
      if((countGoods+1)>good.count){

      }else{
        countGoods++;
        massBatton[1].innerText=`${countGoods}`;
      }
    }
    );
  }

/*
  countButton.addEventListener('click',function(){

  }
  );
  */
  icount++;
}
/*


let Bookcounters=document.querySelectorAll(".counter_of_books span");
for(let Bookcounter of Bookcounters ){
Bookcounter.addEventListener('click',function(){

}
);
}

*/
