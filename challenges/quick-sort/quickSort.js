'use strict';

function quickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length,
    index;

  if (len > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (index < right) {
      quickSort(arr, index, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2),
    pivot = arr[middle],
    i = left,
    j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return i;
}

module.exports = { quickSort };
