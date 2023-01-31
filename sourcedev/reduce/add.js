//箭头函数 开始用的箭头函数所以有问题
//apply 没用 也有问题

const add = function () {
  let args = [...arguments];
  let fn = function () {
    return add.apply(null, args.concat([...arguments]));
    //return add(args.concat([...arguments]));
  };
  fn.toString = () => {
    return args.reduce((a, b) => {
      return a + b;
    });
  };
  return fn;
};

/* function add () {
  let args = [...arguments];
  let fn = function(){
    return add.apply(null, args.concat([...arguments]))
  } 
  fn.toString = () => args.reduce((a, b) => a + b)
  return fn;
} */

const add1 = (...args) => {
  let fn = function (...args1) {
    return add1.apply(null, args.concat([...args1]));
  };
  fn.toString = () => args.reduce((a, b) => a + b);
  return fn;
};

console.log(add(1)(2)(3, 4));
console.log(add1(1)(2)(3, 4));
