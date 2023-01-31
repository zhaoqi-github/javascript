/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function (word1, word2) {
  //base case word1, word2其中一个已经走完了
  //word1[i] === word2[j]
  //word1[i] != word2[j]
  const m = word1.length;
  const n = word2.length;
  //备忘录
  const memo = new Array(m).fill(0).map(() => new Array(n).fill(-1));

  //函数定义：返回 word1[0..i] 和 word2[0..j] 的最小编辑距离
  function dp(word1, i, word2, j) {
    //base case
    if (i === -1) {
      //比如i = -1, j = 0, 那就还需要一次操作
      return j + 1;
    }
    if (j === -1) {
      return i + 1;
    }

    //已经算过了
    if (memo[i][j] != -1) {
      return memo[i][j];
    }

    //关键部分
    if (word1[i] === word2[j]) {
      //相等了，那就求word1[0..i - 1] 和 word2[0..j - 1] 的最小编辑距离就行
      memo[i][j] = dp(word1, i - 1, word2, j - 1); //无需任何操作
    } else {
      //不想等，删除，插入，替换
      memo[i][j] = Math.min(
        dp(word1, i - 1, word2, j) + 1,
        dp(word1, i, word2, j - 1) + 1,
        dp(word1, i - 1, word2, j - 1) + 1
      );
    }

    return memo[i][j];
  }

  return dp(word1, m - 1, word2, n - 1);
};