# Insertion Sort

## Author: Osama Hanoun

Insertion sort is a simple sorthing algortithm that is split into a sorted and unsorted part. Values in the unsorted part are grabbed and placed into the correct position in the sorted part.

Let me show you how it works wiht some good pseudocode:

```
InsertionSort(int[ ]arr)
FOR i = 1 to arr.length

Int j <-- i - 1
int temp <-- arr[i]

WHILE j >= 0 AND temp <arr[j]
  arr[j + 1] <-- arr[j]
  j <-- j - 1

  arr[j + 1]<-- temp
```

How about we break that down into plain English.

- First we will start with a completely unsorted array, we begin with index 0 being out temp variable which we will compare to the rest of the numbers in the array to see if they are sorted correctly.

![unsorted](insertSort0.png)

- Next we want to compare the first two elements against each other.

![one](./assets/insertSort1.png)

- Since 8 is greater than 4 we want to move 4 to it's rightful place behind 8 to achieve ascending order.

- Now the temp variable becomes the value of what number is at index 1, which is now 8. We want to compare 8 to the number after it which is 23.

![two](./assets/insertSort2.png)

- 8 is less than 23, so it is sorted correctly and we can move on.

- The temp variable now becomes the value at the index of 2 which is 23. We will once again compare to it's neighboring number.

![three](./assets/insertSort3.png)

- 23 is less than 42, so it is sorted correctly and we can move on.

- The temp variable moves on to the value that is at the index of 3 which is 42. Let's keep on comparing the numbers!

![four](./assets/insertSort4.png)

- 42 is greater than 16, but it doesn't stop there, we need to keep comparing 16 to the numbers down the line to find its rightful spot! 23 is greater than 16 so it needs to keep moving! Finally 8 is less than 16 so it can finally rest happily in its home at index 2... for now!

- We have one last value to compare and it's residing at index 5! 15 is our lucky number!

![five](./assets/insertSort5.png)

- 42 is greater than 15 so the poor chap needs to keep moving. 23 is greater than 15 so on it goes. 16 is also greater than 15 so it marches along and then finally we come to 8, which is less than 15 and our last value can hang out in its new home!

- Now we are left with a beautiful sorted list! Look at those values ascend!
