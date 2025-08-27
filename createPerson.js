function createPerson(name, age) {
    let _name = name
    let _age = age

    return {
        getName() {
            return _name
        },

        setName(newName) {
            _name = newName
        },

        getAge() {
            return _age
        },

        setAge(newAge) {
            _age = newAge
        }
    }
}

const person = createPerson('Alice', 25)

console.log(person.getName()) // Alice
console.log(person.getAge()) // 25

person.setName('Bob')
person.setAge(25)

console.log(person.getName()) // Bob
console.log(person.getAge()) // 25

// creation phase
/*
lexicalEnv: {
        globalScope: {
            enviromentRecord: {
                person: <uninitialized>
            },

            outer: null
        },

        createPersonEnv: {
            arguments: {
                name: <uninitialized>,
                age: <uninitialized>
            },

            enviromentRecord: {
                _name: <uninitialized>,
                _age: <uninitialized>
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
                person: object
            },

            outer: null
        },

        createPersonEnv: {
            arguments: {
                name: Bob,
                age: 25
            },

            enviromentRecord: {
                _name: Bob,
                _age: 25
            }

            outer: globalEnv
        }
    }
*/