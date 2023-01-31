const sortPromise = async () => {
  let res0 = [];

  const sleep = delay => {
    return new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve();
      }, delay);
    });
  };

  const task = i => {
    return new Promise(async (resolve, reject) => {
      await sleep(500 + i * 100);
      console.log(`now is ${i}`);
      ++i;
      resolve(i);
    });
  };

  for (let i = 0; i < 4; i++) {
    let param = await task(i);
    res0.push(param);
  }

  return Promise.resolve(res0); 
};

sortPromise().then(res => {
  console.log(res, 'res1');  // [1, 2, 3, 4] 'res1'
});

/* const sleep = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      console.log('object :>> ', '123');
      resolve();
    }, delay);
  });
};

const task = i => {
  return new Promise(async (resolve, reject) => {
    await sleep(500 + i * 100);
    console.log(`now is ${i}`);
    ++i;
    resolve(i);
  });
};

[task, task, task, task].reduce(async (prev, task) => {
  const res = await prev;
  return task(res);
}, 0); 

pro.then((res)=>{
    console.log(res, 'res'); //4 'res'
})*/
