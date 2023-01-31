const insertSort = function (arr) {
  for(let i = 1; i < arr.length; i++){
    let cur = arr[i];
    let j = i - 1; //之前已经排序的序列最后一个index

    while(j >= 0 && cur < arr[j]){
      arr[j + 1] = arr[j];
      j--; //空出来第j个元素
    }

    arr[j + 1] = cur;
  }
};

let arr = [5, 4, 3, 2, 1]
//[1, 2, 3, 4, 5]
//[7, 6, 9, 3, 1, 5, 2, 4];
console.log(insertSort(arr));

/* 最佳情况：输入数组按升序排列。T(n) = O(n)
最坏情况：输入数组按降序排列。T(n) = O(n^2)
平均情况：T(n) = O(n^2) */
