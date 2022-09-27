// function* strGeneration() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGeneration()

// function* numberGen(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i
//     }
// }

// const num = numberGen()

const iterator = {
    gen(n = 10) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false}
                }
                return { value: undefined, done: true }
            }
        }
    }
}

for (let k of 'Hello') {
    console.log(k)
}