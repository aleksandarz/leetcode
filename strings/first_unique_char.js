// Dobijaš string s. Pronađi prvi neponovljeni karakter i vrati njegov indeks. Ako ne postoji, vrati -1.

// Input: s = "leetcode"
// Output: 0  // 'l' je prvi jedinstven karakter

// Input: s = "loveleetcode"
// Output: 2  // 'v' je prvi jedinstven karakter

// Input: s = "aabb"
// Output: -1  // Nema jedinstvenih karaktera

function FirstUniqueChar(s) {
    let seen = {};

    for (let char of s) {
        seen[char] = (seen[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}

console.log(FirstUniqueChar("leetcode"));
console.log(FirstUniqueChar("loveleetcode"));
console.log(FirstUniqueChar("aabb"));
