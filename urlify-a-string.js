'use strict';

function urlifyAString (str){
  let newString='';
  
  for(let i=0; i<str.length; i++){
    if(str[i]===' '){
      newString += '%20';
    }
    else{ 
      newString += str[i];}
  }
  return newString;
}
//O(n)

console.log(urlifyAString('hello there '));