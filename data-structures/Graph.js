// undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // to avoid overriding existing list of vertex edges
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {

    this.addVertex(v1); // duplicate check built into this.addVertex

    let v1Edges = this.adjacencyList[v1];
    if (!v1Edges.length || v1Edges.indexOf(v2) === -1) v1Edges.push(v2);

    this.addVertex(v2); // duplicate check built into this.addVertex

    let v2Edges = this.adjacencyList[v2];
    if (!v2Edges.length || v2Edges.indexOf(v1) === -1) v2Edges.push(v1);
  }

  removeEdge(v1, v2) {
    let v1Edges = this.adjacencyList[v1];
    let v2Edges = this.adjacencyList[v2];

    if (v1Edges) v1Edges.splice(v1Edges.indexOf(v2), 1);
    if (v2Edges) v2Edges.splice(v2Edges.indexOf(v1), 1);
  }

  removeVertex(vertex) {
    let edges = this.adjacencyList[vertex];

    if (edges) {
      for (let edge of edges) {
        this.adjacencyList[edge].splice(this.adjacencyList[edge].indexOf(vertex), 1);
      }
      delete this.adjacencyList[vertex];
    }
  }

  // optimal DFS
  DFSRecursive(vertex, visited = {}, result = []) {
    visited[vertex] = true;
    result.push(vertex);

    let edges = this.adjacencyList[vertex];

    for (let edge of edges) {
      if (!visited[edge]) this.DFSRecursive(edge, visited, result);
    }
    return result;
  }

  DFSIterative(vertex) {
    let stack = [vertex];
    let visited = {};
    let result = [];
    let currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      for (let edge of this.adjacencyList[currentVertex]) {
        if (!visited[edge]) {
          // true meaning this edge is already on the call stack to be visited
          visited[edge] = true;
          stack.push(edge);
        }
      }
    }
    return result;
  }

  // neighbors visited from left to right
  BFSIterative(vertex) {
    let queue = [];
    let result = [];
    let visited = {};
    let currentVertex;

    queue.push(vertex);
    visited[vertex] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      for (let edge of this.adjacencyList[currentVertex]) {
        if (!visited[edge]) {
          visited[edge] = true;
          queue.push(edge);
        }
      }
    }
    return result;
  }
}

// to set up graph
let g = new Graph();
g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');