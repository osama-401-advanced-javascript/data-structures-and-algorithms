'use strict';

const leftJoin = (hashTable1, hashTable2) => {
  const outputArray = [];

  for (let word in hashTable1.buckets) {
    const synonym = hashTable1.buckets[word];

    let antonym = 'NULL';

    if (word in hashTable2.buckets) {
      antonym = hashTable2.buckets[word];
    }

    const temp = [word, synonym, antonym];

    outputArray.push(temp);
  }
  console.log('osama', outputArray);
  return outputArray;
};

module.exports = leftJoin;
