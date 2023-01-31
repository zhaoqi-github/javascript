/* var findMinArrowShots = function (points) {
  //按照直径左侧大小排序
  points.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      result++;
    } else {
      points[i][1] = Math.min(points[i - 1][1], points[i][1]);
    }
  }

  return result;
};

findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]); */

var canJump = function (nums) {
  if (nums.length === 1) return true;
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  return false;
};

//canJump([2,3,1,1,4])

var jump = function (nums) {
  let curIndex = 0;
  let nextIndex = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }

  return steps;
};
jump([2, 3, 1, 2, 4, 2, 3]);
