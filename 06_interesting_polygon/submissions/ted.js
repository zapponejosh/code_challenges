let polygon_area = (n) => {
    var new_n = n ** 2
    var old_n_squared = (n - 1) ** 2
    return (new_n + old_n_squared)
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