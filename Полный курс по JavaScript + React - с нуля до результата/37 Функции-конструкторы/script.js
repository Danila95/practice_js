'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`);
};

const dan = new User('Dan', 26);
const alex = new User('Alex', 20);

dan.exit();

dan.hello();
alex.hello();
console.log(dan);
console.log(alex);