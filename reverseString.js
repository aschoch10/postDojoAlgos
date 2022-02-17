// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

let result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]