var foo = function (a, b) {
  const arr = Array.prototype.slice.call(arguments);
  const arr1 = Array.from(arguments);
  const arr2 = [...arguments];
  const arr3 = [];
  for (let i = 0; i < arguments.length; i++) {
    arr3.push(arguments[i]);
  }
  console.log(arr, arr1, arr2, arr3);
};
foo(1, 2); //(2) [1, 2]
