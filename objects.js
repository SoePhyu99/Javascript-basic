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
// Address Object
const adress1 = {
    street: 'RoseMary',
    city: 'New York',
    zipCode: 10001
}
const adress2 = {
    street: 'RoseMary',
    city: 'New York',
    zipCode: 10001
}

// factory function
function createAdress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

// constructor function
function Adress(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

// Object Equality
// are Equal
function areEqual(adress1, adress2) {
    for (let key in adress1) {
        if (adress1[key] !== adress2[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqual(adress1, adress2));

// are Same
function areSame(adress1, adress2) {
    return adress1 === adress2;
}
console.log(areSame(adress1, adress2));