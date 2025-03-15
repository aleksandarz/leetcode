// Dat je niz celih brojeva (pozitivnih, negativnih i nula). Pronađi podniz sa najvećim mogućim proizvodom i vrati taj proizvod.

// let nums = [2, 3, -2, 4]; // 6 (podniz je [2, 3])

function MaxSubarrayProduct(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct]; // Swap zbog negativnog broja
        }

        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);

        result = Math.max(result, maxProduct);
    }

    return result;
}

let nums = [2, 3, -2, 4];
console.log(MaxSubarrayProduct(nums));
