'use strict';

function twoDArray (arr){
  let rows=[];
  let columns=[];

  for(let i=0; i<arr.length; i++){
    let row=arr[i];

    for(let j=0; j < row.length; j++){
      let item=row[j];
      if(item===0){
        rows[i]=true;
        columns[j]=true;
      }
    
    }
  }

  for(let j=0; j < arr.length; j++){
    let row=arr[j];
    for(let p=0; p < row.length; p++){
      if(rows[j]===true||columns[p]===true){
        row[p]=0;
      }

    }   
  }
  return arr;

}

console.log(twoDArray([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));