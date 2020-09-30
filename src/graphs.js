function Graph(noOfVertices) {
  this.noOfVertices = noOfVertices;
  this.adjacencyList = new Map();
}

Graph.prototype.addVertex = function (v) {
  this.adjacencyList.set(v, []);
};

Graph.prototype.addEdge = function (v, w) {
  this.adjacencyList.get(v).push(w);
  this.adjacencyList.get(w).push(v);
};

Graph.prototype.printGraph = function () {
  const keys = this.adjacencyList.keys();

  for (let key of keys) {
    let path = key + " -> ";
    const adjacents = this.adjacencyList.get(key);
    for (let adjacent of adjacents) {
      path += adjacent + " ";
    }
    console.log(path);
  }
};

export default Graph;
