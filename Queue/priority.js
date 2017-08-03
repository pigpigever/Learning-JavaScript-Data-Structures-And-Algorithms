/*
 * @Author: pigpigever
 * @Date: 2017-08-03 17:16:45
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-03 17:32:29
 */

function PriorityQueue() {
    var items = []

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(queueElement)
        } else {
            var added = false
            for (let i = 0; i < items.size(); i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement)
                    added = true
                }
            }
            if (!added) {
                items.push(queueElement)
            }
        }
    }

    this.dequeue = function () {
        return items.shift()
    }

    this.isEmpty = function () {
        return items.length === 0
    }

    this.front = function () {
        return items[0]
    }

    this.clear = function () {
        items = []
    }

    this.size = function () {
        return items.length
    }

}
