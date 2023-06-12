// Factory functions
function createCycle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}

let cycle1 = createCycle(1)
cycle1.draw()

// Constructor Functions
function Cycle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
let cycle = new Cycle(1)
console.log(cycle.radius);