// 第二个参数是传入的数组
const res = [1, [2, 3]];
Function.prototype.myApply = function (context, args) {
  if (!context || context === null) {
    context = window;
  }
  // 创造唯一key值
  let fn = Symbol();
  context[fn] = this; //this指的是调用apply的函数
  // 执行上面这句就相当于 context[fn] = [].concat;
  // 此时的context是[1, Symbol(): ƒ]

  // 执行函数
  /* const b = [1, [].concat];
  const c = b[1](...[1, 2, 3]);
  console.log(c); //[1, ƒ concat(), 1, 2, 3] */
  const res = context[fn](...args);
  delete context[fn];
  return res;
};
console.log([].concat.myApply([1], res));
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers); // 相当于Math.max(5, 6, 2, 3, 7)

// 过程类似
const context = [1];
// 把this放到context上
let fn = Symbol();
context[fn] = [].concat;
// 执行函数
const a = context[fn](...res);
delete context.fn;
console.log(a); // [1, 1, 2, 3]

//结果一致
console.log([1].concat(...res)); // [1, 1, 2, 3]
