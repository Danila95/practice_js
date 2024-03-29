// filter
const filterThis = [2, 4, 3, 6, 8, 9]

const filter = (arr, fn) => {
    const filteredArr = []
    for (let elem of arr) {
        if (fn(elem)) filteredArr.push(elem)
    }
    return filteredArr
}

console.log(filter(filterThis, (elem) => elem % 3 == 0))

// some
const someOfThis = ['Java', 'JavaScript', 'Python']

const some = (arr, fn) => {
    for (let elem of arr) {
        if (fn(elem)) return true
    }
    return false
}

console.log(some(someOfThis, (elem) => elem === "Java"));

// map
const mapMe = [1000, 800, 2400, 500]

const map = (arr, fn) => {
    const mappedArr = []
    for (let elem of arr) {
        mappedArr.push(fn(elem))
    }
    return mappedArr
}

console.log(map(mapMe, (elem) => elem / 10))