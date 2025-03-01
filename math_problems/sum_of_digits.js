// Napiši funkciju koja računa zbir svih cifara u datom broju.

// Ulaz:
// Jedan pozitivan ceo broj n (1 ≤ n ≤ 10⁹).

// Izlaz:
// Celi broj – zbir njegovih cifara.

function sum_of_digits(num) {
    let array = num.toString().split("");
    let sum = 0;
    for (let i of array) {
        sum += parseInt(i);
    }
    return sum;
}

console.log(sum_of_digits(123));
console.log(sum_of_digits(2345));
console.log(sum_of_digits(5));
