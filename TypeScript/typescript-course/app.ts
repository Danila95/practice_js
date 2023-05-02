// let string = 'Hello Typescript'

// function transform(str: string, uppercase: boolean): string {
// 	if (uppercase) {
// 		return str.toUpperCase()
// 	}
// 	return str.toLowerCase()
// }

// const arrowTransform = (str: string, uppercase: boolean): string => {
// 	if (uppercase) {
// 		return str.toUpperCase()
// 	}
// 	return str.toLowerCase()
// }

// let isUppercase = true

// console.log(transform(string, isUppercase))
// console.log(arrowTransform(string, false))

// const person: { name: string; age: number; surname: string; address: { city: string; street: string } } = {
// 	name: 'Danila',
// 	age: 28,
// 	surname: 'Bogdanov',
// 	address: {
// 		city: 'Tomsk',
// 		street: 'Lenina'
// 	}
// }

// function fullname(obj: {name: string, surname: string}): string {
// 	return obj.name + ' ' + obj.surname
// }

// console.log(fullname(person))

// const names: string[] = ['danila', 'alisa', 'alina']

// names.push('oksana')

// for (let name of names) {
// 	console.log(name.toUpperCase())
// }

// const result = names
// 	.filter(n => n !== 'oksana')
// 	.map(n => n.length)
// 	.reduce((acc, cur) => (acc += cur), 0)

// console.log(result)

// const tuple: readonly [number, string] = [100, 'string']

// tuple[0] = 'typescript'
// const temp = tuple[1]

// tuple.push('false')

// const tuple2: [boolean, string, ...number[]] = [true, 'typescript', 1, 2, 3, 4, 5]

// const ROLES = {
// 	ADMIN: 'admin',
// 	USER: 'user'
// }

// enum ROLES {
// 	admin,
// 	user
// }

// const person1 = {
// 	role: ROLES.admin
// }

// const person2 = {
// 	role: ROLES.user
// }

// function check(person: { role: ROLES }) {
// 	if (person.role === ROLES.admin) {
// 		console.log('user is admin')
// 	} else {
// 		console.log('user is user')
// 	}
// }

// const temp = {
// 	role: 'star wars'
// }

// check(person1)
// check(person2)
// // check(temp)

// let a: symbol = Symbol('key')
// let b: symbol = Symbol('key2')

// console.log(a === b)

// const big1: bigint = 123n
// const big2: bigint = BigInt(200)

// console.log(big1)
// console.log(big2)

// function log(message: string): void {
// 	console.log(message)
// }

// function compute(p1: number | string, p2: number | string) {
// 	if (typeof p1 === 'number' && typeof p2 === 'number') {
// 		return p1 + p2
// 	}
// 	return p1.toString() + ' ' + p2.toString()
// }

// console.log(compute(4, 5))
// console.log(compute('hello', 'world'))

// function logError(err: string | string[]): string | void {
// 	if (Array.isArray(err)) {
// 		return err.reduce((acc, cur) => (acc += ' ' + cur), '')
// 	} else {
// 		console.log(err)
// 	}
// }

// const temp = logError(['1', '2', '3', 'dsfgtdfg'])
// console.log(temp)

// type OutputType = 'text' | 'json'

// function convert(data: object, type: OutputType) {
// 	if (type === 'text') {
// 		return JSON.stringify(data)
// 	} else if (type === 'json') {
// 		return { ...data }
// 	}
// }

// console.log(convert({ a: 1 }, 'text'))
// console.log(convert({ b: 1 }, 'json'))

// console.log(convert({ b: 1 }, 'json'))

// INTERFACE

// interface User {
// 	name: string
// 	age: number
// 	hobbies: string[]
// }

// interface Address {
// 	city: string
// 	street: string
// }

// interface FullUser extends User, Address {
// 	date: Date
// }

// const person: FullUser = {
// 	name: 'Danila',
// 	age: 28,
// 	hobbies: ['a', 'b', 'c'],
// 	city: 'Tomsk',
// 	street: 'Lenina',
// 	date: new Date()
// }

// interface UserMap {
// 	[key: number]: FullUser
// 	date?: Date
// }

// const userMap = {
// 	1: person,
// 	2: person,
// 	3: person
// } as UserMap

// userMap[2].date

// let a: unknown = 42

// let b = a === 10

// let c = a + 10

// function throwError(message: string) {
// 	throw new Error(message)
// }

// function loop(): never {
// 	while (true) {}
// }

// function rec(): never {
// 	return rec()
// }
