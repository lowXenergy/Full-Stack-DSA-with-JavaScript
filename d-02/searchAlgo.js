// Linear search in an array

function linearSearch(arr, target) {
    // Write your logic here
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target) return i;
    }
    return -1;
}

// Binary search

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // element found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // search in right half
        } else {
            right = mid - 1; // search in left half
        }
    }

    return -1; // element not found
}

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target)
        return binarySearchRecursive(arr, target, mid + 1, right);
    else
        return binarySearchRecursive(arr, target, left, mid - 1);
}