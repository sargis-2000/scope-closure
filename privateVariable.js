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
console.log(secretValue.get()) // 42
secretValue.set(100)
console.log(secretValue.get()) // 100

// creation phase
/*
lexicalEnv: {
        globalEnv: {
            enviromentRecord: {}
            outer: null,
        },

        privateVariableEnv: {
            arguments: {
                val: <uninitialized>
            },

            enviromentRecord: {
                privateVal: <uninitialized>
            },

            outer: null
        }
    }
*/

// execution phase
/*
    lexicalEnv: {
        globalEnv: {
            enviromentRecord: {}
            outer: null,
        },

        privateVariableEnv: {
            arguments: {
                val: 100
            },

            enviromentRecord: {
                privateVal: 100
            },

            outer: globalEnvs
        }
    },
*/