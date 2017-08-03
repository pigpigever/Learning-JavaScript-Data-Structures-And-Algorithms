/*
 * @Author: pigpigever
 * @Date: 2017-08-03 16:31:54
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-03 17:12:25
 */
function Queue() {
    this.items = []
}

Queue.prototype = {
    construtor:Queue,
    equeue: function(item) {
        this.items.push(item)
    },
    dequeue: function() {
        return this.items.shift()
    },
    front: function() {
        return this.items[0]
    },
    isEmpty: function() {
        return this.items.length === 0
    },
    clear: function() {
        this.items = []
    },
    size: function() {
        return this.items.length
    },
    print: function() {
        this.items.forEach(function(item) {
                console.log(item)
        })
    }
}

let s = new Queue()

s.equeue(3)
s.equeue(2)

s.print()