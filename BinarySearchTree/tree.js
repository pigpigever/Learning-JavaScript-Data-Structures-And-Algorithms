/*
 * @Author: pigpigever 
 * @Date: 2017-08-30 09:41:18 
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-30 11:33:49
 */

//JavaScript实现二叉树

//定义类
exports.BinarySearchTree = function() {

    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }

    var root = null

    this.insert = function (key) {
        var newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    this.inOrderTraverse = function (callback) { //中序遍历
        inOrderTraverseNode(root, callback)
    }

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback)
    }

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback)
    }
}

function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode
        } else {
            insertNode(node.left, newNode)
        }
    } else {
        if (node.right === null) {
            node.right = newNode
        } else {
            insertNode(node.right, newNode)
        }
    }
}

function preOrderTraverseNode(node, callback) {
    if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
    }
}

function inOrderTraverseNode(node, callback) {
    if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
    }
}

function postOrderTraverseNode(node, callback) {
    if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
    }
}

function printNode(value) {
    console.log(value)
}

var tree = BinarySearchTree()
tree.insert(11)
tree.insert(2)
tree.insert(1)
tree.insert(21)
tree.insert(12)
tree.insert(4)
tree.insert(8)
tree.postOrderTraverse(printNode)