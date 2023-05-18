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

// function throwError(message: string): void {
// 	throw new Error(message)
// }

// function loop(): never {
// 	while (true) {}
// }

// function rec(): never {
// 	return rec()
// }

// function log(a: number) {
//     const b =2
//     console.log(1)
//     console.log(b)
// }

// const node = document.querySelector('.test')! as HTMLInputElement

// node.value = '30'

// const found = [{ a: 1 }, { b: 2 }].find(n => n.a === 3)
// found!.a = 3

//  class Box {
//     big!: string
//  }

// class Human {
//     date: Date

//     constructor(date: Date) {
//         this.date = date ?? new Date()
//     }

//     isProgrammer(): boolean {
//         return false
//     }
// }

// class User extends Human {
// 	_name: string
//     _hobbies: string[] = []

// 	constructor(name: string, date: Date) {
//         super(date)
// 		this._name = name
// 	}

// getHobbies(): string[] {
//     return this.hobbies
// }

// get hobbies(): string[] {
//     return this._hobbies
// }

// addHobby(hobby: string): void {
//     this.hobbies.push(hobby)
// }

// set name(name: string) {
//     this._name = name
// }

// override isProgrammer(): boolean {
//     console.log(super.isProgrammer())
//     return true
// }

// setName(newName: string): this {
//     this.name = newName
//     return this
// }
// }

// const user = new User('Danila', new Date())

// console.log(user.isProgrammer())
// user.addHobby('a')
// user.addHobby('b')

// user.setName('Elena').addHobby('s')

// console.log(user.getHobbies())

// console.log(user.hobbies)
// user.name = 'Elena!'

// console.log(user._name)

// class Figure {
//     static BASE_TYPE = 'FIGURE'
//     public size: number = 10
//     public color: string = 'red'
//     private id: number

//     constructor() {
//         this.id = Math.random()
//     }

//     protected getId(): number {
//         return this.id
//     }
// }

// class Box extends Figure {
//     static readonly TYPE = 'BOX'

//     static logId() {
//         console.log(this)
//         console.log(Math.random())
//     }

//     #weight: number = 30

//     public getInfo() {
//         return {
//             size: this.size,
//             color: this.color,
//             id: this.getId(),
//             weight: this.#weight
//         }
//     }
// }

// const box = new Box()

// Box.TYPE = 'RANDOM'

// Box.logId()

// console.log(Box.TYPE)
// console.log(Box.BASE_TYPE)

// console.log(box.getInfo())

// class Car {
//     constructor(public model: string, public color: string) {}
// }

// const ford = new Car('ford', 'red')

// interface Lifecycle {
// 	onInit(): void

// 	onDestroy?(abort: boolean): void
// }

// interface ComponentOnChange {
//     hasChanged: boolean

// 	onChange(data: number): boolean
// }

// class Component implements Lifecycle, ComponentOnChange {
//     hasChanged: boolean = false
// 	onInit(): void {
// 		console.log('Component on init')
// 	}
// 	onDestroy(abort: boolean): void {
// 		if (abort) {
// 			console.log('Component on destroy')
// 		}
// 	}
// 	onChange(data: number): boolean {
// 		if (data > 1) {
// 			return true
// 		} else {
// 			return false
// 		}
// 	}
// }

// abstract class Logger {
//     abstract log(message: string): void

//     table(data: object) {
//         console.table(data)
//     }
// }

// class MessageLogger extends Logger {
//     log(message: string): void {
//         console.log(message)
//     }
// }

// const logger = new MessageLogger()

// logger.log('Hello')
// logger.table({a: 1, b: 2})

// class Person {
// 	constructor(private hobbies: string[]) {}

// 	getHobbies(): string[] {
// 		return this.hobbies
// 	}

// 	addHobby(hobby: string): this {
// 		this.hobbies.push(hobby)
//         return this
// 	}
// }

// console.log(new Person(['coding']).addHobby('piano').getHobbies())

// const test: boolean = 'true'

// console.log()

// const array: Array<string> = ['a', 'b', 'c']
// const array2: Array<number> = [1, 2, 3]

// const promise = new Promise<number>((resolve) => {
//     setTimeout(() => {
//         resolve(42)
//     })
// })

// promise.then((value) => value.toFixed())

// function double<T>(array: T[]): T[] {
// 	return array.concat(array)
// }

// function fill<T>(array: any[], value: T): T[] {
// 	return array.fill(value)
// }

// const res1 = double(['a', 'b', 'c'])
// const res2 = double([1, 2, 3])

// const res3 = fill(['a', 'b', 'c'], 1)
// const res4 = fill(['a', 'b', 'c'], false)

// // res1.map(item => item.concat('s'))
// // res2.map(item => item.toFixed())

// function merge<T, R>(a: T, b: R): T & R {
// 	return Object.assign({}, a, b)
// }

// const res5 = merge({ a: 1 }, { b: 2, c: { d: 3 } })
// console.log(res5);

// function log<T extends string | number>(data: T): T {
// 	console.log(data)
// 	return data
// }

// let res1 = <string>log('i am string')
// let res2 = log(42) as number
// // let res3 = log(true) // error

const obj = { a: 1, b: 2, c: 'a', key: 42 }
const obj2 = { test: 100 }

function getValue<T extends object, R extends keyof T>(obj: T, key: R) {
	return obj[key]
}

const res1 = getValue(obj, 'key')
const res2 = getValue(obj2, 'test')