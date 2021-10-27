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
for (let i=0,j=min; j<=max/step; i++,j++){

    arrey[i]=j+count;
    count=step+count-1;
}
console.log(arrey);
return arrey;
}

//let num=parseInt(prompt("Введите значение"));
//zadanie1(num);



let min=parseInt(prompt("Введите min значение"));
let max=parseInt(prompt("Введите max значение"));
let step=parseInt(prompt("Введите шаг"));

zadanie2(min, max, step);
