console.log([1,2,3]); // [1, 2, 3]

console.log(...[1,2,3]) // 1 2 3

// This lets us push elements into arrays more easily

var first = [1, 2, 3];
var first2 = Object.assign([], first);
var first3 = Object.assign([], first);
var second = [4, 5, 6];

first.push(second)

console.log(first) // [1, 2, 3, [4, 5, 6]]
console.log(first2)

first2.push(...second)
console.log(first2) // [1, 2, 3, 4, 5, 6]

// Spread lets you spread out the elements of an array

function addThreeThings (a, b, c) {
    let result = a + b + c;
    console.log(result);
}

addThreeThings(...first3); // 6
addThreeThings(...second); // 15
addThreeThings(...first); // 6; takes the first 3 eelements
