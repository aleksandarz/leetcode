// Dat ti je niz brojeva nums, pomeri sve nule na kraj, ali zadrži redosled ostalih brojeva.
// Ovo moraš da uradiš na mestu, tj. bez kreiranja novog niza.

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

function MoveZeroes(nums) {
    let zeroes = [];
    let nonZeroes = [];

    for (let num of nums) {
        if (num === 0) {
            zeroes.push(num);
        } else {
            nonZeroes.push(num);
        }
    }

    return [...nonZeroes, ...zeroes];
    // return nonZeroes.concat(zeroes); Isto kao i da smo koristili concat
}

console.log(MoveZeroes([0, 1, 2, 4, 0, 5]));
console.log(MoveZeroes([0, 1, 0, 3, 12]));
