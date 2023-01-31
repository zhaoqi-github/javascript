function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
}

const insertSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    //当前j的下一个位置就是要插入的位置

    arr[j + 1] = cur;
  }
};

const shellSort = function (arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      const cur = arr[i];
      let j = i - gap;

      while (j >= 0 && arr[j] > cur) {
        arr[j + gap] = arr[j];
        j = j - gap;
      }

      arr[j + gap] = cur;
    }
    gap = Math.floor(gap / 2);
  }
};

function selectionSort(arr) {
  let temp;
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;

    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

function mergeSort(arr) {
  // 采用自上而下的递归方法
  //边界条件
  let len = arr.length;
  if (len < 2) {
    return arr;
  }

  const index = Math.floor(len / 2);
  const left = arr.slice(0, index);
  const right = arr.slice(index);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }
  return res;
}

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
    if (arr[i] > arr[pivot]) { //如果当前的这个数比pivot位置的大，则交换他和index位置的数值；
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

let arr = [1, 3, 2, 6, 5, 7, 4];
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [7, 6, 5, 4, 3, 2, 1];
//bubbleSort(arr2);
//insertSort(arr);
//shellSort(arr);
//selectionSort(arr);
//console.log(arr);
//console.log(mergeSort(arr));
let arr3 = [5, 3, 6, 2, 1, 7, 4];
console.log(quickSort(arr3, 0, arr.length - 1));
