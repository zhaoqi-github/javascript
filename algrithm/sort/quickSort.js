function quickSort(arr, left, right) {
  if (left < right) {
    let partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = right;
  //index用来记录下一次遇到比pivot大的数的时候，要与那个位置进行交换；
  index = pivot - 1;
  //index的下一个元素也就是index后面的元素都是比pivot大的，

  for (let i = index; i >= left; i--) {
    if (arr[i] > arr[pivot]) {
      //如果当前的这个数比pivot位置的大，则交换他和index位置的数值；
      if (arr[i] !== arr[index]) {
        swap(arr, i, index);
      }
      index--; //然后index往前移
    }
  }
  //最后把pivot和index的下一个位置交换，index + 1是比pivot大的数
  swap(arr, pivot, index + 1);
  return index + 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//let arr = [4, 5, 0, 1, 6, 9, 2];
let arr = [1, 2, 3, 4, 5, 6, 7];
qSort(arr, 0, 6);
console.log(arr);

/* 最坏的情况是初始序列已经有序，选择最后一个作为基数
第1趟排序经过n-1次比较后，将第1个元素仍然定在原来的位置上，并得到一个长度为n-1的子序列；
第2趟排序经过n-2次比较后，将第2个元素确定在它原来的位置上，又得到一个长度为n-3的子序列；
以此类推，最终总的比较次数：C(n) = (n-1) + (n-2) + ... + 1 = n(n-1)/2；
最坏的情况下，快速排序的时间复杂度为O(n^2) */

/* 最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(nlogn) */
