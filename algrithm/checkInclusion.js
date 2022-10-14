/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/* 滑动窗口
写一个函数来判断 s2 是否包含 s1 的排列 */
 var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);

  //先按照s1来循环记录字母出现次数arr1，arr2
  for (let i = 0; i < s1.length; i++) {
    arr1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  //循环完s1，直接判断arr1和arr2
  if (arr1.toString() === arr2.toString()) return true;

  //不相等，再接着循环s2判断，进一个出一个然后和s1比较
  //滑动窗口
  for (let i = s1.length; i < s2.length; i++) {
    arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    arr2[s2[i - s1.length].charCodeAt() - 'a'.charCodeAt()]--;
    if (arr1.toString() === arr2.toString()) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion('ab', 'eidboaoo'));

/* 输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").

输入：s1= "ab" s2 = "eidboaoo"
输出：false */
