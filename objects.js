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