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

const combine = first.concat(second)
const slice = combine.slice()
console.log(combine);
console.log(slice);