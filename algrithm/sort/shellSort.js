const shellSort = function (arr) {
  let gap = 1;

  while (gap < arr.length / 3) {
    gap = gap * 3 + 1; //动态定义间隔序列
  }

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let cur = arr[i];
      let j = i - gap;

      while (j >= 0 && cur < arr[j]) {
        arr[j + gap] = arr[j];
        j = j - gap;
      }

      arr[j + gap] = cur;
    }
    gap = Math.floor(gap / 3);
  }
};

let arr = [7, 6, 9, 3, 1, 5, 2, 4];
shellSort(arr);
console.log(arr);
