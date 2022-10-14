const sortPartition = (arr, low, high) => {
  let temp;
  let i = low - 1;
  const base = arr[high]; //选最后一个最为base

  for (let j = low; j < high; j++) {
    if (arr[j] <= base) {
      i++;
      //小于base的都往前移
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  //移完之后，交换base的位置到左右两部分中间
  arr[high] = arr[i + 1];
  arr[i + 1] = base;

  //经过这一趟排序后分成了两部分，一部分小于base, 一部分大雨base
  return i + 1;
};
const qSort = (arr, low, high) => {
  if (low < high) {
    const base = sortPartition(arr, low, high);
    //将左右两部分递归进行排序；
    qSort(arr, low, base - 1);
    qSort(arr, base + 1, high);
  }
};

let arr = [4, 5, 0, 1, 6, 9, 2];
//let arr = [1, 2, 3, 4, 5, 6, 7];
qSort(arr);
console.log(arr);
