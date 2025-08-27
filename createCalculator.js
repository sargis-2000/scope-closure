function createCalculator(op) {
    switch (op) {
        case 'add':
            return (a, b) => a + b
        case 'subtract':
            return (a, b) => a - b
        case 'multiply':
            return (a, b) => a * b
        case 'devide':
            return (a, b) => a / b
    }
}

const add = createCalculator('add')
console.log(add(3, 5))

// creation phase
/*
lexicalEnv: {
    globalScope: {
        enviromentRecord: {
            add: <uninitialized>
        },

        outer: null
    },

    createCalculator: {
        arguments: {
            op: <uninitialized>,
        },

        enviromentRecord: {}

        outer: globalEnv
    }
}
*/

// execution phase
/*
lexicalEnv: {
    globalScope: {
        enviromentRecord: {
            add: createCalculatorInnerFn
        },

        outer: null
    },

    createCalculator: {
        arguments: {
            op: 'add',
        },

        enviromentRecord: {}

        outer: globalEnv
    }
}
*/