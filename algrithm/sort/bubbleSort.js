/* function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
} */

// 改进冒泡排序
function bubbleSort1(arr) {

  for (let i = 0; i < arr.length; i++) {
    //这每一趟的目的都是把最大的值放到最后
    let flag = false; //有没有数据交换，没有就说明已经是正序了

    //arr.length - 1 - i 减去i是因为后面几个是已经确定好的了
    for (let j = 0; j < arr.length - 1 - i; j++) {
       //相邻元素比较
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
        // 表示发生了数据交换
      }
    }

    // 没有数据交换，说明是正序了，退出就好了，无需进行后面的循环
    if (!flag) break;
  }
}

// 测试
//let arr = [1, 3, 2, 5, 4]
//let arr = [1, 2, 3, 4, 5];
let arr = [5, 4, 3, 2, 1];

//bubbleSort(arr);
//console.log(arr);

bubbleSort1(arr);
console.log(arr);

/* 时间复杂度： 
最好时间复杂度 O(n)，最坏时间复杂度 O(n^2)，平均时间复杂度 O(n^2)，
空间复杂度：O(1) */

/* 最好的情况：数组是正序；O(n)
最坏的情况：数组是反序；O(n^2) */
