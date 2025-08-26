function privateVariable(val) {
    let privateVal = val

    return {
        set(number) {
            privateVal = number
        },

        get() {
            return privateVal
        }
    }
}

const secretValue = privateVariable(42)
console.log(secretValue.get())
secretValue.set(100)
console.log(secretValue.get())

// execution phase
/*
    lexicalEnv: {
        globalEnv: {
            enviromentRecord: {}
            outer: null,
        },

        privateVariableEnv: {
            arguments: {
                val: 42
            },

            enviromentRecord: {
                privateVal: 42
            },

            outer: globalEnv
        }
    },
*/