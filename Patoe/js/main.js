"use strict"

function pervoe(){
let arr=[3, 90, 5, -100, 50, 0, 560, 1];

function sortChisel(arrey){
let ansver;
ansver=arrey.sort(function(a, b) { return a - b });
return ansver;
}
arr=sortChisel(arr);
let printTitle = (element, text) => {
  if (text.length < 3) return;
  element.innerText = text.toUpperCase();
};
printTitle(document.body, `${arr}`);
}
 pervoe();
