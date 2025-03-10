// Napiši funkciju koja pronalazi zajedničke elemente u dva niza i vraća ih kao novi niz (bez duplikata).

// console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]

function IntersectionOfTwoArrays(arrayOne, arrayTwo) {
    let setArrayOne = new Set(arrayOne);
    let newArray = [];
    for (let element of arrayTwo) {
        if (setArrayOne.has(element)) {
            newArray.push(element);
        }
    }

    let setNewArray = new Set(newArray);
    return [...setNewArray].sort((a, b) => a - b);
}

let firstArray = [1, 2, 2, 1];
let secondArray = [2, 2];
console.log(IntersectionOfTwoArrays(firstArray, secondArray));

let thirdArray = [4, 9, 5];
let fourthArray = [9, 4, 9, 8, 4];
console.log(IntersectionOfTwoArrays(thirdArray, fourthArray));
