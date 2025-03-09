// Dat su dva sortirana niza nums1 i nums2. Spoji ih u jedan sortiran niz i vrati rezultat.

function MergeTwoSortedArrays(nums1, nums2) {
    for (let num of nums2) {
        nums1.push(num);
    }
    nums1.sort((a, b) => a - b); // Vracamo niz sortiran u rastucem redosledu
    return nums1;
}

console.log(MergeTwoSortedArrays([1, 2, 3], [4, 5, 6]));
console.log(MergeTwoSortedArrays([1, 2], [0, 3, 5]));
