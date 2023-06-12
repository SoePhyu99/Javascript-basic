let arr = [3, 4];
// end
arr.push(5, 6)
// beginning
arr.unshift(1, 2)
// middle
arr.splice(2, 0, 'a')

// finding elements(reference type)
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

let course = courses.find(course => course.id == 2)

console.log(course);

// Removing elements
// end
const last = arr.pop();
console.log(last);
// beginning
const firstElement = arr.shift();
console.log(firstElement);
// middle
arr.splice(1, 2)

// Emptying an array
// solution - 1
// arr = [];

// s 2
arr.length = 0;

// s 3
// arr.splice(0, arr.length)

// s 4
// while (arr.length > 0)
//     arr.pop()
console.log(arr);

// Combining and Slicing Arrays
const first = [{ id: 1 }]
const second = [4, 5, 6]

// const combine = first.concat(second)
const combine = [{ ...first }, { ...second }]

// const slice = combine.slice()
const copy = [{ ...combine }]

// Joining arrays
const joined = second.join(',')
const slice = second.slice()
console.log(slice);

// Exercises - Array from Range
const numbers = arrayFromRange(-14, -6);
console.log(numbers);

function arrayFromRange(min, max) {
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

// Exercises - includes()
const includeArray = [1, 2, 3, 4]
console.log(includes(includeArray, 3));

function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement) return true;
    }
    return false;
}
