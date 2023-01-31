const once = (fn) => {
  let res, isFirst = true
  return function (...args) {
    if (!isFirst) return res
    res = fn.call(null, ...args)
    isFirst = false
    return res
  }
}

const f = (x) => x;
const onceF = once(f);
//=> 3
console.log(onceF(3));
//=> 3
console.log(onceF(4));