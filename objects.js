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
delete cycle.color