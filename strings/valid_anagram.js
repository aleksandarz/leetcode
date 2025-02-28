// Dva stringa su anagrami ako imaju iste karaktere u istim količinama, ali poređane drugačije.
// Treba da napišeš funkciju koja proverava da li su dva stringa anagrami.

// Input: s = "listen", t = "silent"
// Output: true

function checkAnagram(s, t) {
    let first_array = s.split("").sort();
    let second_array = t.split("").sort();
    if (first_array.length === second_array.length) {
        if (first_array.join("") === second_array.join("")) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(checkAnagram("listen", "listen"));
console.log(checkAnagram("blue", "white"));
