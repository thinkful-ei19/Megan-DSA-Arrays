'use strict';

function products(arr){
  let newArray=[];

  for (let i=0; i<arr.length; i++) {
    let total = 1;

    for(let j=0; j<arr.length; j++){
      if (arr[j] === arr[i]) {
        total = total*1;
      }
    
      else {
        total=total*arr[j];
      }
    } 

    newArray.push(total);

  }
  return newArray;

}

console.log(products([1, 3, 9, 4]));