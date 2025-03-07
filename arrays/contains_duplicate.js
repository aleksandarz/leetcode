// Dobijaš niz brojeva nums. Proveri da li postoji bilo koji duplikat. Ako postoji, vrati true, inače false.

// Input: nums = [1, 2, 3, 1]
// Output: true

// Input: nums = [1, 2, 3, 4]
// Output: false

// Input: nums = [1, 1, 1, 3, 3, 4, 2, 2, 2]
// Output: true

function ContainsDuplicate(nums) {
    let seen = {};

    for (let num of nums) {
        if (seen[num]) {
            return true;
        }
        seen[num] = true;
    }

    return false;
}

// Test primeri
console.log(ContainsDuplicate([1, 2, 3, 4])); // false
console.log(ContainsDuplicate([1, 1, 1, 3, 3, 4, 2, 2, 2])); // true
