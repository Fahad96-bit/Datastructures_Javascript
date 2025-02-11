class PriorityQueue {
    constructor() {
        this.values = [];
      }
    
      enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
      }
    
      dequeue() {
        return this.values.shift();
      }
    
      sort() {
        this.values.sort((a, b) => a.priority - b.priority);
      }
    
      isEmpty() {
        return this.values.length === 0;
      }
  }
  
  class WeightedGraph {
      constructor() {
          this.nodes = new Map();
      }
      addVertex(node){
        this.nodes.set(node, []);
      }
      addEdge(node1, node2, weight){
        this.nodes.get(node1).push({ node: node2, weight });
        this.nodes.get(node2).push({ node: node1, weight });
      }

    dijkstra(startNode, endNode) {
        const distances = {};
        const previous = {};
        const priorityQueue = new PriorityQueue();
    
        for (const node of this.nodes.keys()) {
          distances[node] = Infinity;
        }
    
        distances[startNode] = 0;
        priorityQueue.enqueue(startNode, 0);
    
        while (!priorityQueue.isEmpty()) {
          const { val: currentNode, priority: currentDistance } = priorityQueue.dequeue();
          for (const neighbor of this.nodes.get(currentNode)) {
            const distanceToNeighbor = currentDistance + neighbor.weight;
            if (distanceToNeighbor < distances[neighbor.node]) {
              distances[neighbor.node] = distanceToNeighbor;
              previous[neighbor.node] = currentNode;
              priorityQueue.enqueue(neighbor.node, distanceToNeighbor);
            }
          }
        }
        return this.buildPath(startNode, endNode, previous);
      }
      buildPath(startNode, endNode, previous) {
        const path = [];
        let currentNode = endNode;
    
        while (currentNode !== startNode) {
          path.unshift(currentNode);
          currentNode = previous[currentNode];
        }
    
        path.unshift(startNode);
        return path;
      }
  }
  
  var graph = new WeightedGraph()
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  graph.addEdge("A","B", 4);
  graph.addEdge("A","C", 2);
  graph.addEdge("B","E", 3);
  graph.addEdge("C","D", 2);
  graph.addEdge("C","F", 4);
  graph.addEdge("D","E", 3);
  graph.addEdge("D","F", 1);
  graph.addEdge("E","F", 1);
  
  
  console.log("path",graph.dijkstra("A", "E"))
  
  // ["A", "C", "D", "F", "E"]