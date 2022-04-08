// function Person(firstName, lastName, born) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.born = born;
// }

// Person.prototype.age = function() {
// 	var now = new Date();

// 	return now.getFullYear() - this.born;
// };

// var iam = new Person('Danila', 'Bogdanov', 1995);

// console.log(iam.age()); // 26


class Person {
	constructor(firstName, lastName, born) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.born = born;
	}

	age() {
		var now = new Date();

		return now.getFullYear() - this.born;
	}
}

const iam = new Person('Danila', 'Bogdanov', 1995);

console.log(iam.age()); // 26