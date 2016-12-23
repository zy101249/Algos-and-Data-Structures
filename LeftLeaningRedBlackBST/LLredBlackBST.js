const RED = "RED" // less problems when debugging
const BLACK = "BLACK"

class LLredBlackBST {
  constructor() {
    this.root = null;
  }

  isRed(node) {
    if(node === null) return false;
    return node.color === RED;
  }

  insert(key, value) {
    this.root = this._insert(this.root, key, value);
    this.root.color = BLACK;
  }

  _insert(node, key, value) {
    if(!node) return new Node(key, value, RED)

    if(key < node.key) node.left = this._insert(node.left, key, value);
    else if(key > node.key) node.right = this._insert(node.right, key, value);
    else node.value = value;

    if (this.isRed(node.right) && !this.isRed(node.left))      node = this.rotateLeft(node);
    if (this.isRed(node.left)  &&  this.isRed(node.left.left)) node = this.rotateRight(node);
    if (this.isRed(node.left)  &&  this.isRed(node.right))     this.flipColor(node);

    return node;
  }

  // iterates through tree to check if item exists in tree.
  search(key) {
    let currentNode = this.root;

    while(currentNode != null) {
      let currentNodeKey = currentNode.key;

      if(key < currentNodeKey) currentNode = currentNode.left
      else if(key > currentNodeKey) currentNode = currentNode.right
      else return currentNode.value
    }

    return null;
  }

  // makes right leaning 3-tree into left leaning 3-tree
  rotateLeft(node) {
    if(!node.right) return;

    let temp = node.right; // temp var to prevent garbage collection
    node.right = temp.left; // set right connect to be left connection
    temp.left = node; // set temp left to node So temp has a right and left
    temp.color = node.color; // keep the attachment color(can only be black)
    node.color = RED; // set the new attachment to be red because this is the left
    return temp;
  }

  // exact opposite of rotate left for the most part
  rotateRight(node) {
    if(!node.left) return;

    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    temp.color = node.color;
    node.color = RED;
    return temp;
  }

  // in the temporary case where we have a node with two red branches on its children connection
  // we made the attachment to the node RED and its branches to be black
  flipColor(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }

}

class Node {
  constructor(key, value, color = BLACK, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = left;
    this.right = right;
  }
}

// let LLRBBST = new LLredBlackBST()

//       LLRBBST.insert('S', 1)
//       LLRBBST.insert('E', 2)
//       LLRBBST.insert('A', 3)
//       LLRBBST.insert('R', 4)
//       LLRBBST.insert('C', 5)
//       LLRBBST.insert('H', 6)
//       LLRBBST.insert('X', 7)
//       LLRBBST.insert('M', 8)
//       LLRBBST.insert('P', 9)
//       LLRBBST.insert('L', 10)

//       console.log(LLRBBST.root)

module.exports = { LLredBlackBST, RED, BLACK, Node }
