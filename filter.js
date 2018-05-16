'use strict';

function filter (arr){
  const newArray=[];
  arr.forEach(item=>{
    if(item<5){
      return;
    }
    newArray.push(item);
  });
  return newArray;
}

console.log(filter([1,2,3,4,5,6,7,8,9]));