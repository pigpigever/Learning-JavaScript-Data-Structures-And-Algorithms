/*
 * @Author: pigpigever
 * @Date: 2017-08-04 16:17:15
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-04 16:33:45
 */

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = i
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                [
                    array[j],
                    array[j - 1]
                ] = [
                    array[j - 1],
                    array[j]
                ]
            }
        }
        array[i] = array[temp]
    }
}

let array = [
    1,
    5,
    2,
    76,
    54,
    3,
    24
]
insertionSort(array)
console.log(array.toString())