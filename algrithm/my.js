var findCircleNum = function (isConnected) {
  let count = 0;
  const n = isConnected.length;
  const parentList = [...new Array(n).keys()];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        union(i, j); //合并成更大的连通域，链接他们的老子
      }
    }
  }

  function union(index1, index2) {
    //连接两个元素，只需要找到它们对应的根节点，使根节点相连，那它们就是相连的节点。
    const parent1 = find(parentList, index1);
    const parent2 = find(parentList, index2);

    if (parent1 === parent2) {
      return;
    }

    //parent1 是index1的老子，parent2 是index2的老子，index1和index2连通，则把他俩合并，就是把parent1的老子(原本是parent1自己)指向parent2,
    parentList[parent1] = parent2;
  }

  function find(parentList, index) {
    //路经压缩
    if (parentList[index] !== index) {
      parentList[index] = find(parentList, parentList[index]);
    }
    return parentList[index];
  }

  parentList.forEach((item, index) => {
    //树的根节点唯一标识了一个集合
    if (item === index) {
      count++;
    }
  });

  return count;
};
let isConnected = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];

console.log(findCircleNum(isConnected));
