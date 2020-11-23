'use strict';
const Hashtable = require('../hashtable.js');

function findRepeatWord(string) {
  string = string.toLowerCase();
  let wordArray = string.match(/[a-z]+\b/g);
  let wordHash = new Hashtable();

  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    let hasTheWord = wordHash.contains(word);
    if (hasTheWord) {
      return word;
    } else {
      wordHash.add(word, word);
    }
  }
  return 'no repeated words';
}

findRepeatWord('Once upon a time, there was a brave princess who...');
module.exports = findRepeatWord;
