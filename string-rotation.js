'use strict';

function stringRotation (str, rotatedStr){
  let compareString= str+str;
  if(str.length !== rotatedStr.length){
    return false;
  }
  return compareString.includes(rotatedStr);
}
console.log(stringRotation('amazon', 'azonam'));