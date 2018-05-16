'use strict';

function mergeArrays (arr1, arr2){
  let ptr1=0;
  let ptr2=0;
  let newArray=[];

  while(ptr1<arr1.length && ptr2<arr2.length){
    if(arr1[ptr1] <= arr2[ptr2]){
      newArray.push(arr1[ptr1++]);
    }
    else{
      newArray.push(arr2[ptr2++]);
    }
  }
  if(ptr2<arr2.length){
    ptr1=ptr2;
    arr1=arr2;
  }
  while(ptr1<arr1.length){
    newArray.push(arr1[ptr1++]);
  }
  return newArray;
}
//O(n)
console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));




// Note to self: Easy way when doing this in normal world:
// function mergeArrays (arr1, arr2){
//   const newArray=[...arr1, ...arr2];
//   return newArray.sort((a,b)=> a-b);
// }