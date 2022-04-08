"use strict";

const persone = {
  name: "Alex",
  age: 25,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    return (this.age = num);
  },
};

console.log(persone.userAge);

console.log((persone.userAge = 30));
