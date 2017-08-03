/*
 * @Author: pigpigever
 * @Date: 2017-08-03 17:38:44
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-03 21:42:42
 */

function LinkedList() {
    let Node = function (item) {
        this.item = item
        this.next = null
    }

    let length = 0
    let head = null

    this.getHead = function () {
        return head
    }

    this.append = function (item) {
        let node = new Node(item)
        let current

        if (head === null) { //链表中的第一个节点
            head = node
        } else {
            current = head

            //循环链表直到找到最后一项
            while (current.next) {
                current = current.next
            }
            //找到最后一项，将它的next赋值为node，建立链接
            current.next = node
        }
        length++
    }

    this.insert = function (position, item) {
        let node = Node(item)
        if (position < 0 || position > length) {
            return false
        } else if (position === 0) {
            let temp = head
            node.next = temp
            head = node
        } else {
            let current = node
            let previous = node
            let count = 0
            while (count++ < position) {
                previous = current
                current = current.next
            }
            previous.next = node
            node.next = current
            length++
        }
    }

    this.removeAt = function (position) {
        if (position < 0 || position > length) {
            return false
        } else if (position == 0) {
            let current = head
            head = current.next
        } else {
            let current = head
            let previous = head
            let count = 0
            while (count++ < positon) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        length--
    }

    this.remove = function (item) {
        let current = head
        let previous = head
        while (item != current.item) {
            previous = current
            current = current.next
        }
        if (head.item === item) {
            head = head.next
        } else {
            previous.next = current.next
        }
    }

    this.indexOf = function (item) {
        let current = head
        let count = 0
        while (current.item !== item) {
            current = current.next
            count++
        }
        return count === 0
            ? -1
            : count
    }

    this.isEmpty = function () {
        return length === 0
    }

    this.size = function () {
        return length
    }

    this.toString = function () {
        let current = head
        while (current.next) {
            console.log(current.item)
            current = current.next
        }
    }

    this.print = function () {
        let current = head
        while (current.next) {
            console.log(current.item + ' ')
            current = current.next
        }
    }

}