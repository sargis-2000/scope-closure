let count = 0;

function createCounter() {
    count++
    return count
}

const counter = createCounter

console.log(counter())
console.log(counter())

// execution phase
/*
    lexicalEnv: {
        globalEnv: {
            enviromentRecord: {
                count: 0
                counter: createCounterRef
            }
            outer: null,
        },

        createCounterEnv: {
            arguments: {},
            enviromentRecord: {},
            outer: globalEnv
        }
    },
*/