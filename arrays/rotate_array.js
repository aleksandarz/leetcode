// Napiši funkciju koja rotira niz n mesta u desno.

// Primeri:
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
// console.log(rotateArray([-1, -100, 3, 99], 2)); // [ 3, 99, -1, -100 ]

function RotateArray(nums, k) {
    for (let i = 0; i < k; i++) {
        let changedElement = nums.pop();
        nums.unshift(changedElement);
    }
    return nums;
}

console.log(RotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(RotateArray([-1, -100, 3, 99], 2));
