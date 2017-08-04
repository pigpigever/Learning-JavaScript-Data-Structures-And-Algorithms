/*
 * @Author: pigpigever
 * @Date: 2017-08-04 16:38:38
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-04 16:56:58
 */

function mergeSort(array) {
    array = mergeSortRec(array)
}

function mergeSortRec(array) {
    let length = array.length;
    if (length === 1) {
        return array
    }
    let mid = Math.floor(length / 2),
        left = array.slice(0, mid)
    right = array.slice(mid, length)
    return merge(mergeSortRec(left), mergeSortRec(right))
}

function merge(left, right) {
    let result = [],
        il = 0,
        ir = 0
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[l++])
        } else {
            result.push(right[ir++])
        }
    }
    while (il < left.length) {
        result.push(left[il++])
    }
    while (ir < right.length) {
        result.push(right[ir++])
    }
    return result
}