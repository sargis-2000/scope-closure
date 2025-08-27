function partial(fn, ...presetArgs) {
    return (...laterArgs) => {
        return fn(...presetArgs, ...laterArgs)
    }
}

function add(...args) {
    return args.reduce((sum, n) => sum + n, 0)
}

const add5 = partial(add, 5)

console.log(add5(10, 20))

// creation phase
/*
lexicalEnv: {
    globalScope: {
        enviromentRecord: {
            add5: <uninitialized>
        },

        outer: null
    },

    partial: {
        arguments: {
            fn: <uninitialized>,
            presetArgs: <uninitialized>
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
            add5: partialInnerFn
        },

        outer: null
    },

    partial: {
        arguments: {
            fn: callbackfn,
            presetArgs: 5
        },

        enviromentRecord: {}

        outer: globalEnv
    }
}
*/