/*
 * @Author: pigpigever
 * @Date: 2017-08-03 22:29:03
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-04 10:00:02
 */

function Set() {
    let items = {}

    this.has = function (value) {
        return items.hasOwnProperty(value)
    }

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value
        }
        return true
    }

    this.remove = function(value){
        if(this.has(value)){
            delete items[value]
            return true
        }
        return false
    }

    this.clear = function(){
        items = {}
    }

    this.size = function(){
        return Object.keys(items).length
    }
}
