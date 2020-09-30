import Graph from "./graphs";

class BinaryNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = new BinaryNode(data);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(node, this.root);
    }
  }

  insertNode(node, subtree) {
    if (!subtree) {
      subtree = node;
    } else if (node.data < subtree.data) {
      subtree.left = this.insertNode(node, subtree.left);
    } else if (node.data > subtree.data) {
      subtree.right = this.insertNode(node, subtree.right);
    }

    return subtree;
  }

  traverse() {
    this.traverseNode(this.root);
  }

  traverseNode(subtree) {
    if (!subtree) {
      return;
    }

    this.traverseNode(subtree.left);
    this.traverseNode(subtree.right);
  }

  findMax() {
    return this.findMaxNode(this.root);
  }

  findMaxNode(subtree) {
    if (subtree === null) return;
    if (subtree.right === null) {
      return subtree.data;
    }
    return this.findMaxNode(subtree.right);
  }

  findMin() {
    return this.findMinNode(this.root);
  }

  findMinNode(subtree) {
    if (subtree === null) return;
    if (subtree.left === null) {
      return subtree.data;
    }
    return this.findMinNode(subtree.left);
  }

  delete(data) {
    this.deleteNode(data, this.root);
  }

  deleteNode(node, subtree) {
    if (!subtree) {
      return null;
    }
    if (subtree.data === node) {
      if (subtree.left === null && subtree.right === null) {
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(7);
tree.insert(15);
tree.insert(12);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(20);

tree.traverse();

// console.log("Maximum node is ", tree.findMax());
// console.log("Minimum node is ", tree.findMin());

var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.printGraph();
