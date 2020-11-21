'use strict';

const LL = require('../Data-Structures/linkedList/linked-list.js');
//   const list1 = new LL();
//   const list2 = new LL();
//   list1.insert(2);
//   list1.insert(3);
//   list1.insert(1);

//   list2.insert(4);
//   list2.insert(9);
//   list2.insert(5);
//  console.log('im list1',list1.head);
//  console.log('im list2',list2.head);
function zipLists(list1, list2) {
  let zippedLL = new LL();
  // console.log('im zippedLL',zippedLL);
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;

  while (currentNode1 || currentNode2) {
    if (currentNode1) {
      zippedLL.append(currentNode1.value);
      currentNode1 = currentNode1.next;
    }
    if (currentNode2) {
      zippedLL.append(currentNode2.value);
      currentNode2 = currentNode2.next;
    }
  }

  return zippedLL;
}

// let l3=zipLists(list1, list2)
// console.log(l3.toString());

module.exports = zipLists;
