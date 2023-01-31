var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  if (amount < 0) return -1;
  let num = Number.MAX_SAFE_INTEGER;
  //dp 数组的定义：当目标金额为 i 时，至少需要 dp[i] 枚硬币凑出。
  //初始化dp, dp length = amount + 1, 第0个只用来计算；dp val = 无限大正数
  const dp = new Array(amount + 1).fill(num);
  dp[0] = 0;

  //假设amount = 11, coins = [1, 2, 5];
  // 外层循环遍历所有状态的所有取值
  for (let i = 1; i < dp.length; i++) {
    // 内层循环求所有选择的最小值
    for (let j = 0; j < coins.length; j++) {
      // 子问题无解，跳过
      if (i - coins[j] < 0) {
        continue;
      }
      dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
    }
  }

  //如果dp[amount]是无限大正数说明无解，返回-1
  return (dp[amount] == num ) ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
