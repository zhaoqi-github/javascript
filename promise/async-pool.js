import asyncPool from "tiny-async-pool";

const timeout = ms => new Promise(resolve => setTimeout(() => resolve(ms), ms));

for await (const ms of asyncPool(2, [1000, 5000, 3000, 2000], timeout)) {
  console.log(ms);
}