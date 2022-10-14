function selectionSort(arr) {
  let temp;
  let minIndex;

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}

var arr = [4, 5, 0, 1, 6, 9, 2];
selectionSort(arr)
console.log(arr); 

/* 最稳定的排序算法之一 */

/* 最佳情况：T(n) = O(n^2)
最差情况：T(n) = O(n^2)
平均情况：T(n) = O(n^2) */

/* 空间复杂度：O(1) */
