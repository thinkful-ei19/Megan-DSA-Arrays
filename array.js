'use strict';

const mem= require('./memory');
const memory=new mem();


class Array{
  constructor(){
    this.length=0;
    this._capacity=0;
    this.ptr = memory.allocate(this.length);
  }

  push(value){
    if(this.length>= this._capacity){
      this._resize((this.length+1)* Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size){
    const oldPtr= this.ptr;
    this.ptr = memory.allocate(size);
    if(this.ptr===null){
      throw new Error ('Out Of Memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity=size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop(){
    if(this.length===0){
      throw new Error ('Index Error');
    }
    const value= memory.get(this.ptr+this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value){
    if(index< 0 || index>=this.length){
      throw new Error ('Index Error');
    }
    if(this.length>= this._capacity){
      this._resize((this.length+1)*Array.SIZE_RATIO);
    }
    memory.copy(this.ptr +index +1, this.ptr+index, this.length-index);
    memory.set(this.ptr+index, value);
    this.length++;
  }

  remove(index){
    if(index<0|| index>=this.length){
      throw new Error ('Index Error');
    }
    memory.copy(this.ptr+index, this.ptr+index+1, this.length-index-1);
    this.length--;
  }

}
// Array.SIZE_RATIO=3;

function main(){
//creates capacity/size it will take of array:
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let megansArray = new Array();

  //add an item to the array
  //   megansArray.push(3);
  //   megansArray.push(5);
  //   megansArray.push(15);
  //   megansArray.push(19);
  //   megansArray.push(45);
  //   megansArray.push(10);
  //   megansArray.pop();
  //   megansArray.pop();
  //   megansArray.pop();

  //   megansArray.remove(0);

  megansArray.push('tauhida');

  console.log('first item in array', megansArray.get(0));
  console.log(megansArray);
}
main();
//With 1 item pushed : { length: 1, _capacity: 3, ptr: 0 } ptr=address

//With 6 items pushed: { length: 6, _capacity: 12, ptr: 3 }
//  ^^ this is because the items didnt fit contiguous in the 3 spots we had allotted
//  ^^ therefore our push block if statement kicks in and we invoke resize
// ^^ resize then gets our original arr length of 3, adds 1 to it, and
// ^^ multiplies it by 3(our SIZE_RATIO).  This gives us a size of 12 and we set
// ^^ that to our capacity.  Now we have a length of 6, and a capacity of 12, with
//  ^^ the pointer starting at 3 because the previous 3 spots had been allotted for
//  ^^ the prior smaller array, aka we need to move it to the next available place
//  ^^ in memory that can hold 12 contiguous spots.

//With 3 items popped: { length: 3, _capacity: 12, ptr: 3 }
// ^^ this is because we still hold our capacity level incase we want to add more
//  ^^ to the array and we also technically havent completely deleted the previous
// ^^ 3 items, they are still stored but will be overwritten next time we push 
// ^^ something into the array
//  ^^ however our length has gone down because it will now ignore those 3 that
//  ^^ will be overwritten next time and if you were to call the array you would 
//^^ only see the first 3 items.
// ^^ pointer/address is the same because we are keeping those 12 contiguous spaces

//**When inserting a string into the array we get back NaN
//  ^^ I believe this may be due to how we have our memory.js set up.
//  ^^ I think the part with new Float64Array(1024) is making it so that it can
//  ^^only understand numbers?
// Mentor help

// _resize function is allocating more space in memory for the array, freeing up
//  the old array space, copying the old array and moving it to the new address/ptr
// where there are enough contiguous blocks to hold it + extra room, and setting that
// new size to the capacity.