function compose(...fn) {
  if (!fn.length) return v => v;
  if (fn.length === 1) return fn[0];
  return fn.reduce((pre, cur) => {
    return (...args) => {
      return pre(cur(...args));
    };
  });
  /* return 3次的都是(...args) => {
      return pre(cur(...args))
    } */
}

// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4); //a就是这么个函数(...args) => {return pre(cur(...args)); }
//开始计算，cur(1) 就是fn4(x)，return pre(5)
//pre就是(...args) => {return pre(cur(...args)); }

//cur(5) 就是fn3(x)，return pre(8)
//pre就是(...args) => {return pre(cur(...args)); }

//cur(8) 就是fn2(x)，return pre(10)
//pre就是function fn1(x) { return x + 1; }

//pre(10) fn1(10) = 11
console.log(a(1)); // 1+4+3+2+1=11