const myNumber = 55

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const object = {
    name: 'Max',
    age: 20
}

// localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Danila'

// console.log(typeof JSON.parse(raw));
// console.log(raw)

// console.log(person);
/// ========================
window.addEventListener('storage', event => {
    console.log(event)
})