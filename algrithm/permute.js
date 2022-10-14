/* 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。 */
var permute = function (nums) {
  const res = [],
    temp = [];
  const visited = new Array(nums.length).fill(false);

  dfs();

  function dfs() {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if (visited[i]) {
        // nums[i] 已经在 track 中，跳过
        continue;
      }
      // 做选择
      temp.push(nums[i]);
      visited[i] = true;
      // 进入下一层树
      dfs();
      // 取消选择
      visited[i] = false;
      temp.pop();
    }
  }

  return res;
};
console.log(permute([1, 2, 3]));
