// Napiši funkciju koja pronalazi najveći broj u listi brojeva.

// Ulaz:
// Lista brojeva nums, sa minimalno jednim brojem (1 ≤ nums.length ≤ 1000, -1000 ≤ nums[i] ≤ 1000).

// Izlaz:
// Najveći broj iz liste.

function LargestNumInArray(array) {
    for (let num of array) {
        if (!(num >= -1000 && num <= 1000)) {
            return false;
        }
    }

    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    return largest;
}

let nums = [100, 200, 300, 400, 500];
console.log(LargestNumInArray(nums));

let nums2 = [100, 1500, 300];
console.log(LargestNumInArray(nums2));
