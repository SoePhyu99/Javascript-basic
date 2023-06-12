const cycle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function (name) {
        console.log(this[name]);
    }
}
cycle.draw('isVisible')