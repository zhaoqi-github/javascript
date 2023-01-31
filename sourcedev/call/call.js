Function.prototype.myCall = function (context, ...args) {
  //如果写成args, 那么接受到的就只有第一个参数，也就是args: 'cheese',
  //如果写成...args, 那么args: ['cheese', 5],
  if (!context || context === null) {
    context = window;
  }
  // 创造唯一的key值
  let fn = Symbol();
  context[fn] = this; //this指向调用call的函数
  // 执行上面这句就相当于
  /* context[fn] = Product(name, price) {
    this.name = name;
    this.price = price;
  } */
  const res = context[fn](...args);
  delete context[fn];
  return res;
};

function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.myCall(this, name, price);
  //执行完上面那句，此时的this是Food {name: 'cheese', price: 5}
  this.category = 'food';
}
console.log(new Food('cheese', 5));
