 'use strict';

let number = 4.6;

console.log(-4/0);
console.log('string' * 4);


const person = 'Danila';

const bool = false;


let test;

console.log(test);

const obj = {
    name: 'Danila',
    age: 26,
    isMarried: false
};

console.log(obj['name']);
console.log(obj.name);



let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);


 let max = 9007199254740991n;
 
 console.log(BigInt(max) + 9n);

 console.log(max * 123n);
 console.log(typeof 123n);

 console.log(BigInt(Number.MAX_SAFE_INTEGER + 2.5));