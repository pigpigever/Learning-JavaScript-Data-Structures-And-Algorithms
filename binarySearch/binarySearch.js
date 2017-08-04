/*
 * @Author: pigpigever
 * @Date: 2017-08-04 15:46:14
 * @Last Modified by: pigpigever
 * @Last Modified time: 2017-08-04 16:00:05
 */

function quickSort(array, left, right) {//快排
    if (array.length > 1) {
        let index = partition(array, length, right)
        if (left < index - 1) {
            quickSort(array, left, index - 1)
        }
        if (index < right) {
            quickSort(array, index, right)
        }
    }
}

function partition(array, left, right) {//划分区间
    let target = Math.floor((left + right) / 2)
    while (left <= right) {
        while (array[left] < array[target]) {
            left++
        }
        while (array[right] > array[target]) {
            right++
        }
        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]]
            left++,
            right++
        }
    }
}

//二分搜索
function binarySearch(array, target) {
    quickSort(array, 0, array.length - 1)
    let low = 0,
        high = array.length - 1,
        mid,
        element

    while (low <= high) {
        mid = Math.floor(low + high)
        element = array[mid]
        if (elment < target) {
            low = mid + 1
        } else if (element > target) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}