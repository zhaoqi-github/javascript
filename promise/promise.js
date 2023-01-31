// 定义三种状态
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

// Promise 构造接受一个函数exector，并立即执行；
// exector 有两个参数resolve/reject, 这两个函数改变status
class Promise {
  constructor(exector) {
    // 初始化状态
    this.status = 'PENDING';
    // 要将成功、失败结果放在this上，便于then\catch访问；
    this.value = undefined;
    this.error = undefined;

    // 保存then中的回调函数队列
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 执行回调函数
        this.onFulfilledCallbacks.forEach(fn => fn(this.value));
      }
    };

    const reject = error => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.error = error;
        this.onRejectedCallbacks.forEach(fn => fn(this.error));
      }
    };

    try {
      // 立即执行executor
      // 把内部的resolve和reject传入executor，用户可调用resolve和reject
      exector(resolve, reject);
    } catch (error) {
      // executor执行出错，将错误内容reject抛出去
      reject(e);
    }
  }

  // then接收两个函数，分别对应FULFILLED和REJECTED状态
  // then返回Promise
  then(onFulfilled, onRejected) {
    const self = this;
    return new Promise((resolve, reject) => {
      if (self.status === PENDING) {
        self.onFulfilledCallbacks.push(() => {
          try {
            setTimeout(() => {
              const result = onFulfilled(self.value);
              // 分两种情况：
              // 1. 回调函数返回值是Promise，执行then操作
              // 2. 如果不是Promise，调用新Promise的resolve函数
              result instanceof Promise ? result.then(resolve, reject) : resolve(result);
            });
          } catch (error) {
            reject(error);
          }
        });
        self.onRejectedCallbacks.push(() => {
          try {
            setTimeout(() => {
              const result = onRejected(self.error);
              result instanceof Promise ? result.then(resolve, reject) : resolve(result);
            });
          } catch (error) {
            reject(error);
          }
        });
      } else if (self.status === FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFulfilled(self.value);
            result instanceof Promise ? result.then(resolve, reject) : resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      } else if (self.status === REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(self.error);
            result instanceof Promise ? result.then(resolve, reject) : resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }

  catch() {}

  static resolve() {}
  static reject() {}
  static all() {}
  static race() {}
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then(
    res => {
      console.log(res, 'res');
      return new Promise((res, rej) => {
        setTimeout(() => res(2), 1000);
      });
    },
    err => console.log(err, 'err')
  )
  .then(
    res => console.log(res, 'res1'),
    err => console.log(err, 'err1')
  );
