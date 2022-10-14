const bubbleSort1 = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    //这每一趟的目的都是把最大的值放到最后
    let flag = false; //有没有数据交换，没有就说明已经是正序了

    //arr.length - 1 - i 减去i是因为后面几个是已经确定好的了
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        flag = true;
      }
    }

    if (!flag) break;
  }
};

// 测试
//let arr = [1, 3, 2, 5, 4]
//let arr = [1, 2, 3, 4, 5];
let arr = [5, 4, 3, 2, 1];

//bubbleSort(arr);
//console.log(arr);

bubbleSort1(arr);
console.log(arr);
