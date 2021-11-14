"use strict"
////////////////////////////////////////////////////////
function pervoe(){
  let count=parseInt(prompt("Введите номер дня недели"));
  function sravn(count){
  if(count>=1&&count<=7)
  {
    switch (count) {
      case 1:
        return('Понедельник');
        break;
        case 2:
          return('Вторник');
        break;
        case 3:
          return('Среда');
        break;
        case 4:
          return('Четверг');
        break;
        case 5:
          return('Пятница');
        break;
        case 6:
          return('Суббота');
        break;
        case 7:
          return('Воскресенье');
        break;
    }
  }
 return("В неделе нет такого дня");
}
console.log(sravn(count));
}
//////////////////////////////////////////////////
function vtoroe(zna){
  let arr=["07","11",7,8,"76","A"];
  let prov=a=>{return arr.includes(a)};
 if(!(prov(zna))) { console.log(`${arr.includes(zna)}`);  arr.push(zna);}
 else {console.log(`Ввод невозможен значение уже присвоенно в массиве`);}
console.log(arr);
}
//////////////////////////////////////////////////
function trete(arr){ //Функция возвращает рандомное количесво рандомных элиментов от 1 до 3  из массива

  let colElem=Math.round(Math.random() * (3 - 1) + 1);
  console.log(colElem);
  let newArr=[];
  for (let i = 0; i < colElem; i++) {//Рандомное количество элементов
    let pushArr=(arr,colElem)=>{
      let randInd;
      do{
       randInd=Math.round(Math.random() * arr.length);
       }while((newArr.includes(arr[randInd])));
       return arr[randInd]
      }
      newArr.push(pushArr(arr,colElem));
    }
    console.log(newArr);
    return newArr
}
//////////////////////////////////////////////////
function chetvertoe(){
let anyText=`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab autem explicabo consequuntur, odit quo hic eaque eos exercitationem id? Ullam vel aspernatur dicta officia odit, deleniti nulla ut placeat.`;
let newArr=[];//массив для разделенного предложения со знаками.
let buffArr=[];// маасив для разделения слов на буквы и удаления знаков препинания
let txt;// строка буффер для востановления букв в слова
let arr=[];// итоговый масси без знаков перпинания
newArr=anyText.split(" ");
for (let i = 0; i < newArr.length; i++) {
if (newArr[i][newArr[i].length-1]==','||newArr[i][newArr[i].length-1]=='?'||newArr[i][newArr[i].length-1]=='!'||newArr[i][newArr[i].length-1]=='.'||newArr[i][newArr[i].length-1]==';'||newArr[i][newArr[i].length-1]==':') {
  buffArr=newArr[i].split("");
  buffArr.pop();
 txt=buffArr.join('');
  arr.push(txt);
}else{
  arr.push(newArr[i]);
}
}
let max=0,index=0;//
for (let i=0; i<arr.length;i++) {
  if(arr[i].length>max){
    max=arr[i].length;
    index=i;
  }
}
console.log(`${arr[index]} maxlen= ${max}`);
return arr[index];
}

//////////////////////////////////////////////////
function patoe(){
  let first = ["Апрель", "Июль", "Октябрь", "Май"], second = ["Май", "Январь", "Декабрь", "Октябрь"];
  let fil= first.filter(item => second.includes(item));
  return fil;
}
//////////////////////////////////////////////////
function chestoe(arr){
  let newarr=[];
for ( let td of arr) newarr = newarr.concat(td.filter(item => item>500));

if(newarr.length>0){
  console.log('Существует температура превышающая 500');
  console.log(newarr);
  return newArr;
}
  console.log('Не существует температуры превышающей 500');
  return ;
}
//////////////////////////////////////////////////
let anyText=`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab autem explicabo consequuntur, odit quo hic eaque eos exercitationem id? Ullam vel aspernatur dicta officia odit, deleniti nulla ut placeat.`;
function sedmoe(text){
  console.log(text[0].toUpperCase() + text.slice(1).toLowerCase())
  return text[0].toUpperCase() + text.slice(1).toLowerCase();

}
 // pervoe();//pervoe();
//vtoroe(8);
//let newArr
//let arr=["07","11",7,8,"76","B","C","D","E","F","G","H","K","L","M","P","O","U","T","R","S","V","N"];
////let newArr=trete(arr);
//chetvertoe();
//patoe();
let temps = [
  [344, 241, 321, 344, 121],
  [111, 313, 351, 314],
  [134, 111, 452],
];
let aa=chestoe(temps);
sedmoe(anyText);

