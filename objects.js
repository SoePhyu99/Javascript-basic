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

// Blog Post Object
const blog = {
    title: 'Lorem',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus risus, aliquet eu aliquet porta, laoreet vel massa. In pellentesque leo tortor, vitae luctus neque fermentum et. Sed ut sollicitudin lectus, et posuere augue. Aliquam et tempor orci, non commodo nibh. Duis tortor nisl, varius id diam at, vehicula accumsan massa. Aliquam sed arcu quis eros mattis porta mattis ac elit. Maecenas placerat aliquet finibus. Fusce accumsan lorem sed risus tincidunt finibus. Aliquam convallis dolor sed mollis suscipit. Proin vel lorem quis est pharetra ultrices ac nec sem.',
    author: 'Cicero',
    views: '200k',
    comments: {
        author: 'John',
        body: 'I like lorem paragraph. Its very useful.'
    },
    isLive: false
}

const blogPost = `${blog.title} by ${blog.author}

    ${blog.body}
Seen by - ${blog.views}
Comments
${blog.comments.author}
    ${blog.comments.body}
${blog.isLive == true ? 'Live' : 'Lived'}`;
console.log(blogPost)