function Node(){
    this.data = null
    this.leftChild = null
    this.rightChild = null
}

function BinaryTree(){
    Node.call(this)
    this.root = null
}

;(function () {
    const F = function () {}
    F.prototype = Node.prototype
    BinaryTree.prototype = new F()
    BinaryTree.prototype.constructor = BinaryTree
})()

BinaryTree.prototype.insertNode = function(data){
    if(this.root === null){
        this.root = {}
        this.root.data = data
    }else{
        insertNode(this.root, data)
    }
}
BinaryTree.prototype.travelTree = function (root) { //前序遍历
    console.log(root.data)
    this.travelTree(root.leftChild)
    this.travelTree(root.rightChild)
}

//插入结点，这里构造的是一颗二叉搜索树
function insertNode (node,data) {
    if (node.data < data) {
        if (node.leftChild === null) {
            node.leftChild = { data }
        } else {
            insertNode(node.leftChild, data)
        }
    }else{
        if (node.rightChild === null) {
            node.rightChild = { data }
        } else {
            insertNode(node.rightChild, data)
        }
    }
}

let obj = new BinaryTree()

Object.keys(obj).forEach((item, index) => {
    console.log(item, index)
})
