
function Node() {
    this.data = null
    this.leftChild = null
    this.rightChild = null
}

function BinaryTree() {
    this.root = null
}

BinaryTree.prototype = {
    constructor: Node,
    insertNode: function (data) {
        var root = this.root
        if (this.root === null) {
            this.root = {}
            this.root.data = data
        } else {
            console.log('开始插入节点= =')
            insertData(this.root, data)
        }
    },
    travelTree: function (root) {
        if (root != null) {
            console.log(root.data)
            this.travelTree(root.leftChild)
            this.travelTree(root.rightChild)
        }
    }
}

function insertData(node, data) {
    if (data < node.data) {
        if (node.leftChild == null) {
            node.leftChild = { data }
        } else {
            insertData(node.leftChild, data)
        }
    } else {
        if (node.rightChild == null) {
            node.rightChild = { data }
        } else {
            insertData(node.rightChild, data)
        }
    }
}


var tree = new BinaryTree()

tree.insertNode(5)
tree.insertNode(10)
tree.insertNode(1)
tree.insertNode(3)
tree.insertNode(20)
tree.insertNode(8)
tree.travelTree(tree.root)