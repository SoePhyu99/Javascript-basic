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