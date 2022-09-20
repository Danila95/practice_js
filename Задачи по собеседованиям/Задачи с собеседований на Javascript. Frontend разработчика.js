// https://www.youtube.com/watch?v=kOTD3gndink&list=WL&index=5

// реализовать функцию delay

// const START = Date.now()

// function someFn() {
//     console.log('time: ', Date.now() - START)
//     console.log('args: ', arguments);
// }

// Function.prototype.delay = function(ms) {
//     return (...args) => {
//         setTimeout(() => {
//             this.call(this, ...args)
//         }, ms)
//     }
// }

// const f = someFn.delay(500)

// f('arg1', 'arg2', 1, 2)


const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10
            },
            {
                v: 15
            }
        ]
    }
]

const recursive = (tree) => {
    let sum = 0
    tree.forEach(node => {
        sum += node.v
        if (!node.c) {
            return node.v
        }
        sum += recursive(node.c)
    })
    return sum
}

const iteration = (tree) => {
    if (!tree.length) {
        return 0
    }
    const stack = []
    let sum = 0
    tree.forEach(node => {
        stack.push(node)
    })
    while (stack.length) {
        const node = stack.pop()
        sum += node.v
        if (node.c) {
            node.c.forEach(n => {
                stack.push(n)
            })
        }
    }
    return sum
}

console.log(iteration(tree));