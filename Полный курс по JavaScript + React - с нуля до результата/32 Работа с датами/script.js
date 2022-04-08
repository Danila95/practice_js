'use strict';

const now = new Date('2021-10-06');
// new Date.parse('2021-10-06');

console.log(now.setHours(40));
console.log(now);


// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());


// примитивный таймер
let start = new Date();

for (let i = 0; i < 100000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунды`);