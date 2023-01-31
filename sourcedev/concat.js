console.log(...[1, 2, 3, [4, 5]]); //1,2,3,[4, 5]
console.log([].concat(...[1, 2, 3, [4, 5]])); //[1, 2, 3, 4, 5]
console.log(...[1, [2, 3, [4, 5]]]); //1,[2, 3, [4, 5]]
console.log([].concat(...[1, [2, 3, [4, 5]]])); //[1, 2, 3, [4, 5]]
console.log(...[2, [3], 4, [5]]);
var arr2 = [1].concat(...[2, [3], 4, [5]]);
console.log(arr2); // [1, 2, 3, 4, 5]


Array.prototype.myConcat = function () {
  const merge = [];
  //concat 不修改现有数组
  for (let i = 0; i < this.length; i++) {
    //a数组调用concat, 所以this指向a数组
    merge.push(this[i]);
  }
  for (let j = 0; j < arguments.length; j++) {
    const args = arguments[j];
    //判断参数是不是数组
    if (args instanceof Array) {
      for (let k = 0; k < args.length; k++) {
        merge.push(args[k]);
      }
    } else {
      merge.push(args);
    }
  }
  return merge;
};

const a = [1, 2, 3],
  b = [3, 4, 5];
const c = [1, 2, 3],
  d = [3, [4, 5]];
const e = [1, [2, 3]],
  f = [3, [4, 5]];
console.log(a.myConcat(b)); // [1, 2, 3, 3, 4, 5]
console.log(c.myConcat(d)); // [1, 2, 3, 3, [4, 5]]
console.log(e.myConcat(f)); // [1, [2, 3], 3, [4, 5]]
console.log(e.myConcat(...f)); // [1, [2, 3], 3, 4, 5]

const res = [1, [2, 3]];
console.log([].concat.apply([], res));
console.log([].concat(...res));
