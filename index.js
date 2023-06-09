// swapping variable
let a = 'red'
let b = 'blue'

let c = a
a = b
b = c

console.log(a);
console.log(b);

// max of two numbers
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(4, 3));

// is landscape
function isLandscape(width, height) {
    return width > height;
}
console.log(isLandscape(300, 300));

// Fizzbuzz
function fizzBuzz(input) {
    if (typeof input !== "number") {
        return 'Not a number';
    }
    let result = input;
    let fizz = input % 3 === 0 ? 'Fizz' : '';
    let buzz = input % 5 === 0 ? 'Buzz' : '';
    if (fizz + buzz !== '') {
        result = fizz + buzz;
    }
    return result;
}
console.log(fizzBuzz(10));

// Demerit points
function checkSpeed(km) {
    const speedLimit = 70;
    km = Math.floor(km)
    if (km <= speedLimit + 4) {
        return 'OK'
    } else if (km >= 180) {
        return 'license suspended'
    } else {
        return 'point ' + Math.floor((km - speedLimit) / 5);
    }
}
console.log(checkSpeed(185));

// even odd numbers
showNumber(10);
function showNumber(limit) {
    for (i = 0; i <= limit; i++) {
        let result = i % 2 == 0 ? 'even' : 'odd';
        console.log(i, result);
    }
}

// count truthy
let array = [0, 1, 2, 3, '', undefined, 'm'];
function countTruthy(array) {
    let count = 0;
    for (const i of array) {
        if (i) count++;
    }
    return count;
}
console.log(countTruthy(array));

// String properties
let movie = {
    title: 'GOTC',
    releaseDate: 2018,
    director: 'James Gunn',
    ratings: 8.2
};
showProperties(movie)
function showProperties(obj) {
    for (const set in obj) {
        if (typeof obj[set] === "string") {
            console.log(set, ':', obj[set]);
        }
    }
}

// Sum of Multiples of 3 & 5
sum(30)
function sum(limit) {
    let result = 0;
    let gap = 2;
    for (let i = 3; i <= limit; i += 3) {
        result += i;
        if ((i + gap) <= limit) {
            result += i + gap;
            gap += 2;
        }
    }
    console.log(result);
}