// binary search tree

// define node
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
    find(sought) {
        let currentNode = this;
        while(currentNode) {
            console.log("VISITING:", currentNode.val);
            if (currentNode.val === sought) {
                return currentNode;
            }
            if (currentNode.val > sought) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

// define binary search tree, which is basically just
// defining the root
class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    // 'in order' traversal
    traverse(node=this.root) {
        if (node.left) this.traverse(node.left);
        console.log(node.val);
        if (node.right) this.traverse(node.right);
    }
} 

// manually setup tree
const A = new Node('A');
const B = new Node('B', A);
const D = new Node('D');
const E = new Node('E', B, D);
const F = new Node('F');
const G = new Node('G', F);

const tree = new BinarySearchTree(E);