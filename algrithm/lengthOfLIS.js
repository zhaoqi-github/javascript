var lengthOfLIS = function (nums) {
  //dp[i] 以nums[i]结尾的严格递增子序列的长度

  //初始化为1，子序列肯定包括自己
  const dp = new Array(nums.length).fill(1);

  //假设dp[0...n-1]都求出来了，dp[n]就是在nums找比nums[n]小的那个元素结尾的递增子序列的长度
  //所以对于每一个dp[i]，都是去nums找i之前的的比nums[i]小的那个，然后在他的dp[j]上加1
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  let res = 0;
  for(let i = 0; i < dp.length; i++){
    res = Math.max(dp[i], res)
  }

  return res;
};