'use strict';

function removeChar(string, noWant) {
  let newString = '';

  for (let i=0; i<string.length; i++) {
    let noWantCharacter = 'good to go, we don not match';

    for(let j=0; j<noWant.length; j++){
      if (noWant[j] === string[i]) {
        noWantCharacter = 'not good, we match';
      }
    }

    if (noWantCharacter === 'not good, we match') {
      newString +='';
    } else {
      newString+=string[i];
    }
  } 

  return newString;
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));