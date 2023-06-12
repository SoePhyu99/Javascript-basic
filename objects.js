// Factory functions
function createCycle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}

// Constructor Functions
function Cycle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// Dynamic Nature of Objects
const cycle = {
    radius: 1
}
cycle.color = 'red'
cycle.draw = function () {
    console.log('draw');
}
delete cycle.draw

// Cloning an Object
let another = {}
// for (const key in cycle) {
//     another[key] = cycle[key]
// }
// Object.assign(another, cycle)
// another = { ...cycle }
console.log(another)

// Exercises

const adress = {
    street: 'RoseMary',
    city: 'New York',
    zipCode: 10001
}
function showAdress(adress) {
    for (let key in adress) console.log(key, adress[key]);
}
showAdress(adress)