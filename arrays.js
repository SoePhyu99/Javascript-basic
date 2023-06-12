const arr = [3, 4];
// end
arr.push(5, 6)
// beginning
arr.unshift(1, 2)
// middle
arr.splice(2, 0, 'a')

console.log(arr);

// finding elements(reference type)
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

let course = courses.find(course => course.id == 2)

console.log(course);