let polygon_area = (n) => {

    let x = n
    let total = 0
    while (x > 0) {
        total += 2 * ((2 * x) - 1)
        x -= 1
    }
    total -= (2 * n) - 1
    return total

}


let assert = require('assert')
assert.strictEqual(polygon_area(1), 1)
assert.strictEqual(polygon_area(2), 5)
assert.strictEqual(polygon_area(3), 13)
assert.strictEqual(polygon_area(4), 25)
console.log('All Tests Passed')

// Uncomment for complete testing after passing initial tests
let full_test = require('./tests/tests')
full_test(polygon_area)