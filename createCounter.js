let count = 0;

function createCounter() {
    count++
    return count
}

const counter = createCounter

console.log(counter())
console.log(counter())