// Napiši funkciju koja računa zbir svih cifara u datom broju.

// Ulaz:
// Jedan pozitivan ceo broj n (1 ≤ n ≤ 10⁹).

// Izlaz:
// Celi broj – zbir njegovih cifara.

function SumOfDigits(num) {
    let array = num.toString().split("");
    let sum = 0;
    for (let i of array) {
        sum += parseInt(i);
    }
    return sum;
}

console.log(SumOfDigits(123));
console.log(SumOfDigits(2345));
console.log(SumOfDigits(5));
