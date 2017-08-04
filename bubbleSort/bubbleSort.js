/*
 * @Author: pigpigever
 * @Date: 2017-08-04 15:20:47
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-04 15:32:57
 */

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [
                    array[j],
                    array[j + 1]
                ] = [
                    array[j + 1],
                    array[j]
                ]
            }
        }
    }
}

let array = [
    3,
    4,
    2,
    6,
    7,
    1,
    8
]

bubbleSort(array)

console.log(array.toString())   //1 2 3 4 6 7 8