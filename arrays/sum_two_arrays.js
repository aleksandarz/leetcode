// Napiši funkciju koja sabira elemente dva niza iste dužine i vraća
// novi niz gde je svaki element zbir odgovarajućih elemenata iz oba niza.

function SumTwoArrays(nums1, nums2) {
    let setNums1 = new Set(nums1);
    if (nums1.length !== nums2.length) {
        return false;
    }

    let newArray = [];
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i] + nums2[i];
        newArray.push(num);
    }
    return newArray;
}

console.log(SumTwoArrays([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
console.log(SumTwoArrays([10, 20, 30], [1, 2, 3])); // [11, 22, 33]
