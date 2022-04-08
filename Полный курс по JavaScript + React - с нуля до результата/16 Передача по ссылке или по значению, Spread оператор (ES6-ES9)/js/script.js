 'use strict';

//  let a = 5,
//      b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;  // ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) { // функция, которая копирует объект
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;


// console.log(numbers);
// console.log(newNumbers);

const add = {
  d: 17,
  e: 20
};

// console.log(Object.assign(numbers, add)); // метод, который объединяет массивы

const clone = Object.assign({}, add); // копирует объект на глубоком уровне

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = '123';

// console.log(oldArray);
// console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet); 

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c); 
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

console.log(newAarray);

const q = {
  one: 1,
  two: 2
};

const newObj = {...q};