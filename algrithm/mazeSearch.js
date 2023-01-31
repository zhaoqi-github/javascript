var mazeSearch = function () {
  var matrix = [
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
  ];

  var m = matrix.length;
  var n = matrix[0].length;
  // 此数组用来记录当前节点是否被访问过
  var visited = new Array(m).fill('').map(d => new Array(n).fill(false));

  var dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  var dfs = function (x, y, path) {
    // 到达终点
    if (x == m - 1 && y == n - 1) {
      console.log(path); // 打印当前路径
      return;
    }

    for (var dir of dirs) {
      var nx = x + dir[0];
      var ny = y + dir[1];
      // 分别判断当前节点是否是有效节点
      if (
        nx < m &&
        nx >= 0 &&
        ny < n &&
        ny >= 0 &&
        matrix[nx][ny] == 0 &&
        visited[nx][ny] == false
      ) {
        // 是否已访问过
        // 当访问该节点时，标记已访问
        visited[nx][ny] = true;
        // 进入递归，每次递归都表示一个完整路径
        // 需要传入当前节点和已经访问过的路径
        dfs(nx, ny, path + '-' + nx + ',' + ny);
        // 每次路径完成时，针对该节点需要回溯原始状态
        visited[nx][ny] = false;
      }
    }
  };

  // 进入起点
  dfs(0, 0, '0,0');
  visited[0][0] = true;
};

mazeSearch();