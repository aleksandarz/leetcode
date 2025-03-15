// Dat ti je niz celih brojeva nums dužine n.
// Treba da pronađeš maksimalnu apsolutnu razliku između zbira elemenata bilo koje dve neprazne podnizove (subarrays) niza.

// Ulaz: nums = [1, -3, 2, 5, -4, 6]
// Izlaz: 18

function MaxSubarrayDiff(nums) {
    let maxSum = nums[0];
    let currentSumOne = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSumOne = Math.max(nums[i], currentSumOne + nums[i]);
        maxSum = Math.max(maxSum, currentSumOne);
    }

    let minSum = nums[0];
    let currentSumTwo = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSumTwo = Math.min(nums[i], currentSumTwo + nums[i]);
        minSum = Math.min(minSum, currentSumTwo);
    }

    return Math.abs(maxSum - minSum);
}

let numsOne = [1, -3, 2, 5, -4, 6];
console.log(MaxSubarrayDiff(numsOne));

let numsTwo = [2, -1, -2, 1, -4, 2, 8];
console.log(MaxSubarrayDiff(numsTwo));
