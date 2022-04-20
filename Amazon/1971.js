var validPath = function (n, edges, source, destination) {
  const graph = [];
  for (let i = 0; i < n; i++) {
    graph.push([]);
  }
  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }
  const q = [source];
  const visited = new Set();
  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const vertex = q.shift();
      if (vertex === destination) return true;
      if (visited.has(vertex)) continue;
      visited.add(vertex);
      for (const m of graph[vertex]) {
        q.push(m);
      }
    }
  }
  return false;
};
