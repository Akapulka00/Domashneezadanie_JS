"use strict"

function zadanie1(count)
{

    if(isNaN(count) || !isFinite(count)){
        console.log(`Ваше значение не пригодно для работы`);
        return
    }
    console.log(`Ваше значение пригодно для работы`);
    if(Math.abs(count)>=5 && Math.abs(count)<=20){
        console.log(`${count} Товаров`);
        return
    }else if((Math.abs(count%10))==1){
        console.log(`${count} Товар`);
        return
    }else if((Math.abs(count%10))>=2&&(Math.abs(count%10))<=4)
    {
        console.log(`${count} Товара`);
        return
    }else{
        console.log(`${count} Товаров`);
        return
    }
    return
}

function zadanie2(min, max, step=1){
let arrey=[], count=0;
for (let i=0,j=min; j<=max; i++,j+=step){
    if(i==0){
      arrey[i]=min;
    }else{
    arrey[i]=arrey[i-1]+step;
    }
}
console.log(arrey);
return arrey;
}

function zadanie3_1(z){
let type= typeof(z); // эту задачу можно было решать через nan но он не позволяет определить логический тип.
console.log(type);
if(type=="number") {
  console.log(`Тип объекта число`);
  return
}else if(type=="string"){
  console.log(`Тип объекта строка`);
  return
}
if(type=="undefined"){
  console.log(`Тип объекта пустое значение`);
  return
}
if(type=="boolean"){
  console.log(`Тип объекта логический`);
  return
}
  console.log(`Тип объекта другой`);
  return

}
function zadanie3_2(z){
 if (z===undefined){
   console.log(`Значение переменной не было присвоено`);
   return
 }
 console.log(`Значение переменной  было присвоено`);
 return
}
 function zadanie3_3(z){
   if (!isNaN(z)){
      console.log(`Это число`);
      return
   }
   console.log(`Это не число`);
   return
 }
let num=parseInt(prompt("Введите значение"));
zadanie1(num);



let min=parseInt(prompt("Введите min значение"));
let max=parseInt(prompt("Введите max значение"));
let step=parseInt(prompt("Введите шаг"));
zadanie2(min, max, step);

 zadanie3_1(5);
 zadanie3_2(5);
zadanie3_3(5);

