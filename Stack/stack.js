/*
 * @Author: pigpigever 
 * @Date: 2017-08-03 16:31:58 
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-03 16:45:46
 */

function Stack() {
    this.items = []
}

Stack.prototype = {
    constructor: Stack,
    push: function (item) {
        this.items.push(item)
    },
    pop: function () {
        this.items.pop()
    },
    peek: function () {
        return this.items[this.items.length - 1]
    },
    isEmpty: function () {
        return this.items.length === 0
    },
    size: function () {
        return this.items.length
    },
    clear: function () {
        this.items = []
    },
    print: function () {
        this.items.forEach(item => {
            console.log(this.item)
        })
    }
};

var s = new Stack()

s.push(1)
s.push(2)

console.log(s.size());  //2