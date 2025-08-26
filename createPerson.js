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

console.log(person.getName())
console.log(person.getAge())

person.setName('Bob')
person.setAge(25)

console.log(person.getName())
console.log(person.getAge())

// executionPhase
/*
    lexicalEnv: {
        globalScope: {
            enviromentRecord: {
                person: createPersonRef
            },

            outer: null
        },

        createPersonEnv: {
            arguments: {
                name: Alice,
                age: 25
            },

            enviromentRecord: {
                _name: Alice,
                _age: 25
            }

            outer: globalEnv
        }
    }
*/