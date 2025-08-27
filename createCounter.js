function createCounter() {
    let count = 0;

    return () => ++count
}

const counter = createCounter()

console.log(counter()) // 1
console.log(counter()) // 2


//creation phase
/*
  lexicalEnv: {
    globalEnv: {
      environmentRecord: {
        counter: <uninitialized>
      }
      outer: null
    },
    createCounterEnv: {
      arguments: {},
      environmentRecord: {
        count: <uninitialized>
      },
      outer: globalEnv
    }
  }
*/

// execution phase
/*
    lexicalEnv: {
        globalEnv: {
            enviromentRecord: {
                counter: createCounterInnerFnRef
            },
            outer: null,
        },

        createCounterEnv: {
            arguments: {},
            enviromentRecord: {
                count: 2
            },
            outer: globalEnv
        }
    },
*/