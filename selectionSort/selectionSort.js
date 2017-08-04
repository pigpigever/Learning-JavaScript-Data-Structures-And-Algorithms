/*
 * @Author: pigpigever
 * @Date: 2017-08-04 16:03:04
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-04 16:14:13
 */

function selectionSort(array) {
    let length = array.length
    let indexMin

    for (let i = 0; i < length - 1; i++) {
        indexMin = i
        for (let j = i + 1; j < length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            [array[i], array[indexMin]] = [array[indexMin], array[i]]
        }
    }
}

let array = [
    3,
    4,
    2,
    6,
    8,
    5,
    1,
    11,
    100,
    32,
    4
]

selectionSort(array)
console.log(array.toString())