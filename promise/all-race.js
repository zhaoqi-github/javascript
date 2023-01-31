Promise.all = function (iterators) {
  return new Promise((resolve, reject) => {
    if (!iterators || iterators.length === 0) {
      resolve([]);
    }
    const count = 0; // 计数器，用于判断所有任务是否执行完成
    const result = []; // 结果数组

    for (let iter of iterators) {
      // 考虑到iterators[i]可能是普通对象，则统一包装为Promise对象
      Promise.resolve(iter).then(
        data => {
          result.push(data); // 按顺序保存对应的结果
          // 当所有任务都执行完成后，再统一返回结果
          if (++count === iterators.length) {
            resolve(result);
          }
        },
        err => {
          reject(err); // 任何一个Promise对象执行失败，则调用reject()方法
          return;
        }
      );
    }
  });
};


// 哪个状态先改变就直接返回那个的结果
Promise.race = function (iterators) {
  return new Promise((resolve, reject) => {
    iterators.forEach(iter => {
      Promise.resolve(iter).then(
        val => resolve(val),
        err => reject(err)
      );
    });
  });
};
