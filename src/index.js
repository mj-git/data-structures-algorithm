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
    console.log(subtree.data);
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

console.log(tree);

tree.traverse();

console.log("Maximum node is ", tree.findMax());
console.log("Minimum node is ", tree.findMin());
