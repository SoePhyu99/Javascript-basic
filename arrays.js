const arr = [3, 4];
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
const first = arr.shift();
console.log(first);
// middle
arr.splice(1, 2)

console.log(arr);