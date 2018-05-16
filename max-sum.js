'use strict';

function maxSum(arr){
  let holdsTheHighest=0;
  let addNextInLineSum=0;

  for(let i=0; i<arr.length; i++){
    addNextInLineSum=addNextInLineSum+arr[i];
    if(addNextInLineSum<0){
      addNextInLineSum=0;
    }
    if(holdsTheHighest<addNextInLineSum){
      holdsTheHighest=addNextInLineSum;
    }
  }
  return holdsTheHighest;  
}

console.log(maxSum([4,6,-3,5,-2,1]));
//O(n) because it loops through only once SERIOUSLY HARD GEESH!!!