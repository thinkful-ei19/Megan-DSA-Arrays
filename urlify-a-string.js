'use strict';
//**initial go was O(n) but we can do better...initial below:

// function urlifyAString (str){
//   let newArray=[];
//   const splitStr= str.split('');
//   splitStr.forEach(char=>{
//     if(char===' '){
//       return newArray.push('%20');
//     }
//     newArray.push(char);
//   });
//   return newArray.join('');
// }
// console.log(urlifyAString('hello there'));


//** final go is O(1) which is best.
function urlifyAString2 (str){
  return str.replace(/ /gi, '%20');
}
console.log(urlifyAString2('hello there '));