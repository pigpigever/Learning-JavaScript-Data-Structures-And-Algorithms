
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
    insertData: function (data) {
        var root = this.root
        if (this.root === null) {
            this.root = {}
            this.root.data = data
        } else {
            console.log('开始插入节点= =')
            insertNode(this.root, data)
        }
    },
    travelData: function (root) {
        (function travelTree(root) {
            if (root != null) {
                console.log(root.data)
                travelTree(root.leftChild)
                travelTree(root.rightChild)
            }
        })(root)
    }
}

function insertNode(node, data) {
    if (data < node.data) {
        if (node.leftChild == null) {
            node.leftChild = { data }
        } else {
            insertNode(node.leftChild, data)
        }
    } else {
        if (node.rightChild == null) {
            node.rightChild = { data }
        } else {
            insertNode(node.rightChild, data)
        }
    }
}


var tree = new BinaryTree()

tree.insertData(5)
tree.insertData(10)
tree.insertData(1)
tree.insertData(3)
tree.insertData(20)
tree.insertData(8)
tree.travelData(tree.root)