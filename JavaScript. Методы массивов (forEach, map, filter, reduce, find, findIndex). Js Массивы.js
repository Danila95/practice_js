const people = [
    {name: 'Danila', age: 27, budget: 5000000},
    {name: 'Roman', age: 25, budget: 25000},
    {name: 'Dmitry', age: 17, budget: 12000},
    {name: 'Vasily', age: 32, budget: 18000},
    {name: 'Alex', age: 41, budget: 2100000},
    {name: 'Elena', age: 28, budget: 4000000}
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person)
// }

// ForEach
// people.forEach((person, index, pArr) => {
//     console.log(person)
//     console.log(index)
//     console.log(pArr)
// })

// Map
// const newPeople = people.map(person => person.age * 3)
// console.log(newPeople)


// Filter
// const adults = people.filter(person => person.age >= 18)
// console.log(adults);

// Reduce
const amount = people.reduce((total, person) => {
    return total + person.budget
}, 0)
console.log(amount)

// Find
// const elena = people.find(person => person.name === 'Elena')
// console.log(elena);

// FindIndex
const elenaIndex = people.findIndex(person => person.name === 'Elena')
console.log(elenaIndex);