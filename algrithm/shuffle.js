const shuffle = arr => {
  // 不改变原数组
  const result = [...arr];
  for (let i = result.length; i > 0; i--) {
    // Math.random() ==> [0, 1)
    // Math.random() * i ==> [0, i)
    const index = Math.floor(Math.random() * i); // [0, i - 1]
    [result[index], result[i - 1]] = [result[i - 1], result[index]];
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
