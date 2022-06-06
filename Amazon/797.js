const allPathsSourceTarget = (graph) => {
  const last = graph.length - 1;
  const res = [];
  const dfs = (node, path) => {
    path.push(node);
    if (node === last) {
      res.push(path);
      return;
    }
    for (let edge of graph[node]) {
      dfs(edge, [...path]);
    }
  };
  dfs(0, []);
  return res;
};
