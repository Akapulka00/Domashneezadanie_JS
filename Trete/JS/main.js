"use strict"

function zadanie1(){
    let sum=0;
    let nums = [
        [23, 56, 75, -90, 123],
        [17, 0, -6429, -122],
        [19, 86, 55, -3, 900, 0, 0],
        [4, 9, -2]
     ];
     console.log(nums.length);
     for (let i=0;i<(nums.length);i++){
        console.log(`nums[${i}]=${nums[i]}`);
        for(let j=0;j<(nums[i].length);j++){
         nums[i][j]=nums[i][j]*10;
         sum+=nums[i][j];
        }
     }
     console.log(nums);
     console.log(sum);
}
function zadanie2(){
   let arr=[];
   let max=[0],min=[301];
   for(let i=0;i<7;i++){
      arr[i]=Math.floor(Math.random() * (300 - 5 ))+ 5;
      if(arr[i]>max[0])
       {max[0]=arr[i];
         max[1]=i;
      }
      if (arr[i]<min[0]){
          min[0]=arr[i];
          min[1]=i;
      }
   }
   console.log(arr);
   arr[max[1]]=min[0];
   arr[min[1]]=max[0];
   console.log(arr);

}
function zadanie3(){
   let array=[];
   let otrArr=[];
   for(let i=0;i<100;i++){
      array[i]=Math.floor(Math.random() * (100 + 100 ))- 100;
   }
   console.log(array);
   for(let i=0;i<100;i++){
      if(array[i]<0){
         otrArr.push(array[i]);
         array.splice(i,1);
         i--;
      }
      
   }
   console.log(array);
   console.log(otrArr);
}
function zadanie4(){
   let arrLog=["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
   let login;
   do {
      login=prompt("Введите Login");
   } while (arrLog.includes(login)!= true);
  console.log('Вы подобрали логин для Входа!')
   

}
function zadanie5(){
   let arrLog=["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
   let login;
   login=prompt("Введите Login");
   console.log()
   while(arrLog.includes(login)== true || (parseInt(login.length)<2)){
      console.log('Ваш логин уже используется!');
      login=prompt("Введите новый Login");
   }
      arrLog.push(login);
      console.log('Ваш новый логин введен.')
      console.log(arrLog);
}
//zadanie1();
//zadanie2();
//zadanie3();
//zadanie4();
zadanie5();