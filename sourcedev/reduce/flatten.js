// reduce递归
const flatten1 = arr => {
  if (!arr.length) return;
  return arr.reduce((pre, cur) => {
    // cur 依次是1, [2, 3, [4, 5]], 2, 3, [4, 5], 4, 5
    // 判断当前元素是不是数组，是的话继续递归
    return Array.isArray(cur) ? [...pre, ...flatten1(cur)] : [...pre, cur];
  }, []);
};
const arr = [1, [2, 3, [4, 5]]];
console.log(flatten1(arr));
// 递归；参数控制“拉平”层数
function flatten3(arr, num = 1) {
  if (!arr.length) return;
  return num > 0
    ? arr.reduce((pre, cur) => {
        return Array.isArray(cur) ? [...pre, ...flatten3(cur, num - 1)] : [...pre, cur];
      }, [])
    : arr.slice();
}
const arr1 = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5];
console.log(flatten3(arr1, Infinity));
console.log(flatten3(arr1, 2));


// 迭代
const flatten2 = arr => {
  if (!arr.length) return;
  let res = arr.slice();
  // 一直展开直到数组中没有数组元素了
  while (res.some(item => Array.isArray(item))) {
    res = [].concat(...res); // 数组中还有数组元素则继续展开一层数组 
  }
  return res;
};
// 迭代；参数控制“拉平”层数
const flatten4 = (arr, num = 1) => {
  if (!arr.length) return;
  let res = arr.slice();
  // num规定展开多少层
  while (num > 0) {           
    if (res.some(item => Array.isArray(item))) {
      res = [].concat.apply([], res);    // 数组中还有数组元素则继续展开一层数组
    } else {
      break;
    }
    num--;
  }
  return res;
};
console.log(flatten2(arr));
console.log(flatten4(arr, 2));
