const isObjectEmpty = obj => obj?.constructor === Object && Reflect.ownKeys(obj).length === 0;
console.log(isObjectEmpty({})); //true
console.log(isObjectEmpty(null));
console.log(isObjectEmpty('{}'));
console.log(isObjectEmpty({ a: 'not empty' }));
