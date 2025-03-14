// Dobijaš niz brojeva nums i jedan ciljani broj target. Treba da pronađeš indekse dva broja u nizu koji daju zbir jednak target.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]  # (Jer nums[0] + nums[1] = 2 + 7 = 9)

let nums = [2, 7, 11, 15];
let target = 9;

function TwoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === complement) {
                return [i, j];
            }
        }
    }
}

console.log(TwoSum(nums, target));

// Drugi nacin

// function TwoSum(nums, target) {
//     let map = new Map(nums);
//     for (let i = 0; i <= map.length; i++) {
//         let complement = target - nums[i];

//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }

//         map.set([i], i);
//     }

//     return [];
// }
