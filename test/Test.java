import java.util.List;
import java.util.ArrayList;

class Solution {
  static List<String> res = new ArrayList<>();

  public static List<String> letterCasePermutation(String s) {
    char[] cs = s.toCharArray();
    dfs(cs, 0);
    return res;
  }

  /**
   * @param cs  搜索的字符数组
   * @param idx 开始搜索的位置
   */
  static void dfs(char[] cs, int idx) {
    res.add(String.valueOf(cs));
    for (int i = idx; i < cs.length; i++) {
      // 数字, 则跳过
      if (isDigit(cs[i]))
        continue;
      // 大小写反转
      cs[i] = changeLetter(cs[i]);
      // 搜索
      dfs(cs, i + 1);
      // 回溯, 大小写反转回来
      cs[i] = changeLetter(cs[i]);
    }
  }

  /**
   * 反转大小写
   * 'A' --> 'a'
   * 'a' --> 'A'
   */
  public static char changeLetter(char c) {
    return (c >= 'a' && c <= 'z') ? (char) (c - 32) : (char) (c + 32);
  }

  /**
   * 判断是否是数字 (此题中的字符, 非字母即数字)
   */
  public static boolean isDigit(char c) {
    return c >= '0' && c <= '9';
  }
}

public class test {
  public static void main(String[] args) {
    String s = "a1b2";
    List<String> res = Solution.letterCasePermutation(s);
    System.out.println(res);
  }
}
