//  Proveri da li je dati string palindrom (ignoriši velike/male razlike i nepotrebne razmake).

// let s = "A man, a plan, a canal: Panama"; // true

function ValidPalindrome(s) {
    let filteredStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = filteredStr.split("").reverse().join("");

    return filteredStr == reversedStr;
}

let s = "A man, a plan, a canal: Panama";
console.log(ValidPalindrome(s));

let m = "race a car";
console.log(ValidPalindrome(m));
