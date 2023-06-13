// Function Declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression
let run = function () {
    console.log('run');
}

// Exercises - Sums of Arguments
function sum(...args) {
    for (let e of args) {
        if (Array.isArray(e)) {
            for (let i of e) {
                args.push(i)
            }
            args.splice(args.indexOf(e), 1)
        }
    }
    let total = args.reduce((a, b) => { return a + b });
    console.log(total);
    return total;
}
sum([1, 2, 3, 4, 5])

// Exercises - Area of circle
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Exercises - Error Handling
const nums = [10, 2, 3, 4, 5]
try {
    const max = getMax(nums)
    console.log(max);
} catch (e) {
    console.log(e.message);
}

function getMax(array) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid Array!')
    }
    return array.reduce((accumulator, current) => {
        if (current > accumulator) accumulator = current;
        return accumulator;
    }, 0)
}