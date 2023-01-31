//基础类型
console.log(typeof 1); //"number"
console.log(typeof '1'); //"string"
console.log(typeof true); //"boolean"
console.log(typeof undefined); //"undefined"
console.log(typeof null); //"object"
console.log(typeof Symbol()); //"symbol"
//引用类型 除了function之外返回的都是object
console.log(typeof {}); //"object"
console.log(typeof []); //"object"
console.log(typeof new Function()); //"function"
console.log(typeof new Date()); //"object"
console.log(typeof new RegExp()); //"object"

//只能用于引用类型判断
console.log({} instanceof Object); //true
console.log([] instanceof Array); //true
console.log(new Function() instanceof Function); //true
console.log(new Date() instanceof Object); //true
console.log(new RegExp() instanceof RegExp); //true
console.log([] instanceof Object); //true
console.log(1 instanceof Number); //false

//toString是Object原型对象上的一个方法，该方法默认返回其调用者的具体类型
console.log(Object.prototype.toString.call(1)); //"[object Number]"
console.log(Object.prototype.toString.call('1')); //"[object String]"
console.log(Object.prototype.toString.call(true)); //"[object Boolean]"
console.log(Object.prototype.toString.call(null)); //"[object Null]"
console.log(Object.prototype.toString.call(undefined)); //"[object Undefined]"
console.log(Object.prototype.toString.call(Symbol())); //"[object Symbol]"

console.log(Object.prototype.toString.call([])); //"[object Array]"
console.log(Object.prototype.toString.call({})); //"[object Object]"
console.log(Object.prototype.toString.call(new Function())); //"[object Function]"
console.log(Object.prototype.toString.call(new Date())); //"[object Date]"
console.log(Object.prototype.toString.call(new RegExp())); //"[object RegExp]"

