"use strict"

function pervoe (){
let count=0;
if (count>=90 && count<=100) {
  console.log('Отлично')
}else if(count>=60 && count<=89){
  console.log('Хорошо')
}else if(count>=40 && count<=59){
  console.log('Удовлетворительно')
}else if(count>=0 && count<=39){
  console.log('Попробуйте еще раз')
}else{
  console.log('Ошибка')
}
}

function vtoroe (){
  let firstNum= parseInt(prompt("Введите первое число"));
  let secondNum= parseInt(prompt("Введите второе число"));
  let  operator = prompt("Введите оператор");

  switch (operator) {
    case '+':
      console.log('Cумма чисел =', firstNum+secondNum);
      break;
      case '-':
        console.log('Разность чисел =', firstNum-secondNum);
      break;
      case '*':
        console.log('Перемножение чисел =', firstNum*secondNum);
      break;
      case '/':
        console.log('Деление чисел =', firstNum/secondNum);
      break;

    default:
      console.log('Ошибка выбора оператора');
      break;
  }
}
function trete (){
let tarelki=parseInt(prompt("Введите количество тарелок"));
let sredstvo=parseInt(prompt("Введите количество моющего средства"));
if (tarelki>0 && sredstvo>0) {
  while((tarelki>0) && (sredstvo>0)){
    tarelki--;
  sredstvo -= 0.5;
  }
  if (sredstvo<=0 && tarelki<=0) {
    console.log('Кончились тарелки и средство одновременно');
  }else if(sredstvo<=0){
    console.log('Кончилось средство');
  }else if(tarelki<=0){
    console.log('Кончились тарелки');
  }

}else{
  console.log('Помыть тарелки невозможно одного из компанентов не хватает');
}

}
function chetire (){
  let zagadNum=Math.floor(Math.random() * (9 - 1 + 1)) + 1;

  while(1){
    let polzNum= parseInt(prompt("Введите число от 1 до 9"));
    if(polzNum===zagadNum){
      console.log('вы угадали');
      break;
    }else if(polzNum>zagadNum){
      console.log('загаданное число меньше');
    }else if(polzNum<zagadNum){
      console.log('загаданное число больше ');
    }

  }

}
function patoe (){
  let vibranChislo=Math.floor(Math.random() * (500 - 10 + 1)) + 10;
  console.log(vibranChislo);
  if (vibranChislo>=25 && vibranChislo<=200) {
    console.log('Число',vibranChislo,'содержится в интервале (25;200)');
  }else{
    console.log('Число',vibranChislo,' не содержится в интервале (25;200)');
  }
}
function chestoe(){
  let min=0;
  let max=100;
  while(1){

    if (max==min) {
      console.log("Ваше число =",max)
      break;
    }
    console.log("Число >=",Math.round(max-((max-min)/2)), min,max);
    let otvet= prompt("Введите ваш ответ");
    if(otvet==="да"){
      min=Math.round((max-(max-min)/2));
    }
    if(otvet==="нет"){
      max=Math.floor((min+(max-min)/2));
    }

    if(otvet==="стоп"){
      break;
  }
}
}
//pervoe();
//vtoroe();
//trete();
//chetire ();
//patoe();
chestoe();
