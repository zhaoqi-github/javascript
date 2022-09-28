/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const n = nums.length;
  const res = [],
    path = [];
  const visited = new Array(n).fill(1);

  function dfs() {
    if (path.length === nums.length) {
      res.push(path.slice(0));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] === 2) continue;
      //2. nums[i] === nums[i - 1] && visited[i - 1] === 1
      //当前的这个节点和他前面那个节点是一样的，并且他前面那个已经走过一遍了，为了防止产生重复结果，就不再走一遍了
      if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1] === 1) continue;

      path.push(nums[i]);
      visited[i] = 2;
      dfs();
      path.pop();
      visited[i] = 1;
    }
  }

  //1. 先排序，让相同的元素挨着
  nums = nums.sort((a, b) => a - b);
  dfs();
  return res;
};
console.log(permute([1, 1, 2]));
