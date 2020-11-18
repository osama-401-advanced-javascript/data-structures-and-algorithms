# Quick Sort

- This sorting algorithm uses the idea of divide and conquer. It finds an element called the **pivot** which divides the array into two halves and sorts each half so the left half is less than the pivot and the elements in the right half are greater than the pivot.
- It consists of three steps recursively
  1. Find pivot that divides the array into two halves
  2. Quick sort the left half.
  3. Quick sort the right half.

Let's look at some pseudo code

```
ALGORITHM QuickSort(arr,left,right)
if left < right
//Partition the array by setting the position of the pivot value
DEFINE position <- Partition(arr, left, right)
//sort the left
QuickSort(arr,left,position - 1)
//Sort the right
QuickSort(arr,position +1, right)

ALGORITHM PArtition(arr, left, right)
//set a pivot value as a point of reference
 DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```

Let's go through how to do it step-by-step!

- Let's start with an unsorted array, we are going to pick a "pivot" here. The pivot can be any number, or the middle one. We are going to pick the last element of this array to be our pivot.

- Now let's go through and compare our pivot to each element starting on the left or start end of the array. We are moving any element smaller than our pivot value to the left, and any element larger than the pivot value to the right.

- the pivot is now in the middle, and we will call this our partitionIndex, so we can keep track of where the center of our list is and how it should be split.

- Let's do the sort again for the left side of the pivot. We will do that by picking a new pivot from the elements in this smaller array, and we will once again put all items smaller to the left and larger to the right. Keep passing through until this half is sorted.

- Now we will do the same for the elements on the right side of our original pivot. Just keep sorting the smaller to the left and larger to the right until this is all sorted.

- Both halves are sorted we will just put them together on either side of our partition Index, with the smaller items on the left and the larger on the right! There ya go! The array is now sorted and happy!

- Quick sort isn't so scary once you break it down, and I hope you understand it just a tiny bit more after reading this.
