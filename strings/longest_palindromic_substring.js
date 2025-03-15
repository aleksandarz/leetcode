// Pronadji najduži palindromski podstring u datom stringu.

// let s = "babad"; // izlaz: "bab" ili "aba" (oba su validna)

function LongestPalindromicSubstring(s) {
    if (s.length < 1) return ""; // Ako je string prazan

    let start = 0,
        maxLength = 1;

    // Funkcija za ekspanziju oko centra
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Vraćamo dužinu pronađenog palindroma
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(i, i); // Proveravamo za neparan palindrom
        let len2 = expandAroundCenter(i, i + 1); // Proveravamo za paran palindrom

        let len = Math.max(len1, len2);

        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2); // Ažuriramo početak palindroma
        }
    }

    return s.substring(start, start + maxLength); // Vraćamo najduži palindrom
}

let s = "babad";
console.log(LongestPalindromicSubstring(s)); // "bab" ili "aba"
