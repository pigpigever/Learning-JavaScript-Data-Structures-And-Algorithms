/*
 * @Author: pigpigever
 * @Date: 2017-08-03 23:41:19
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-03 23:48:08
 */

let quickSort = function (arrary, left, right) {
    let index
    if (array.length > 1) {
        index = partition(array, left, right)
        if ((left < index - 1)) {
            quickSort(array, left, index - 1)
        }
        if (index < right) {
            quickSort(array, index, right)
        }
    }
}

let partition = function (array, left, right) {
    let pivot = array[Math.floor((left + right) / 2)],
        i = left,
        j = right
    while (i <= j) {
        while (array[i] < pivot) {
            i++
        }
        while (array[j] > pivot) {
            j--
        }
        if (i <= j) {
            swapQuickSort(array, i, j)
            i++,
            j++
        }
    }
}

let swapQuickSort = function(array,index1,index2){
    let aux= array[index]
    array[index1] = array[index2]
    array[index2] = aux
}