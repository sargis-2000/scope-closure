function createCachingFunction() {
    let lastArg = null
    let lastResult = null

    return (n) => {
        if (n === lastArg) {
            console.log('cahced:', lastResult)
        }

        lastArg = n
        lastResult = n + n
        console.log('calculated:', lastResult)
    }
}

const cachedCalculation = createCachingFunction()
console.log(cachedCalculation(5))
console.log(cachedCalculation(5))

// creation phase
/*
lexicalEnv: {
    globalScope: {
        enviromentRecord: {
                cachedCalculation: <uninitialized>
        },

        outer: null
    },

    createPersonEnv: {
        arguments: {},

        enviromentRecord: {
            lastArg: <uninitialized>,
            lastResult: <uninitialized>
        }

        outer: globalEnv
    }
}
*/

// execution phase
/*
lexicalEnv: {
    globalScope: {
        enviromentRecord: {
            cachedCalculation: createCachingFunctionInnerFn
        },

        outer: null
    },

    createPersonEnv: {
        arguments: {},

        enviromentRecord: {
            lastArg: 5,
            lastResult: 5
        }

        outer: globalEnv
    }
}
*/