// Задание #1

// var a = 5;
// let b = 10;
// const c = 13;

// console.log(a);
// console.log(b);
// console.log(c);

// a = 6;
// b = 11;

// Задание #2

// const a = 100;
// a = 20;
// console.log(a);

// В первом случае появляется ошибка, тк константу нельзя переписать на новое значение

// console.log(a);
// let a = 15;
// console.log(a);

// Во втором случае будет отображаться ошибка, тк переменная не была еще инициализирована, а ее уже требует вывести в консоль

// console.log(a);
// var a;
// a = 10;
// console.log(a);

// Во третьем случае все будет работать, но сначала отобразиться ubdefined, а потом 10, тк срабатывает такое понятие как хостинг или всплытие

// Задание #3

// const productName = "Хлеб";
// const productPrice = 30;
// const productQuantity = 10;
// const resultCost = productPrice * productQuantity;

// console.log(
//   `Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`
// );

// Задание #4

// console.log(typeof "Hello");
// console.log(typeof 10);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof (() => {}));

// Задание #5

// console.log(10 == 10); // true
// console.log(10 != 10); // false
// console.log(12 == "Привет"); // false
// console.log(10 < 11); // true
// console.log(12 > 20); // false
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(true || true); // true
// console.log(10 <= 10); // true
// console.log(18 <= 20); // true
// console.log(50 >= 50); // true
// console.log(51 >= 50); // true
// console.log({} === {}); // false
// console.log({} == {}); // false

// const a = {};
// const b = a;
// console.log(a === b); // true потому, что в переменную b копируется ссылка объекта a

// Задание #6

// const a = 2;
// const b = 1;

// console.log(a > b);

// Задание #1

// let a = 21;

// if (a % 2 === 0) {
//   console.log("Четное");
// } else {
//   console.log("Нечетное");
//   a = a + 1;
//   console.log(a);
// }

// Задание #2

// const count = 1000;

// for (let i = 0; i < count; i++) {
//   if (i % 2 != 0 || i % 12 === 0) {
//     console.log(i);
//   }
// }

// Задание #3

// const a = [1, 10, 15, -100, -23, 19, 15032];
// const b = [];

// a.map((item) => {
//   const share = (item * 25) / 100;
//   b.push(item + share);
// });

// console.log(a);
// console.log(b);

// const arr = [1, 10, 15, -100, -23, 19, 15032];
// const newArr = [];

// for (const i of arr) {
//   newArr.push(i * 1.25);
// }

// console.log(arr);
// console.log(newArr);

// Задание #4

// function sayHello(name) {
//   if (name) {
//     console.log(`Hello ${name}`);
//   } else {
//     console.log(`Hello someone`);
//   }
// }

// sayHello("Dan");

// const sayHello = (name) => {
//   if (name) {
//     console.log(`Hello ${name}`);
//   } else {
//     console.log(`Hello someone`);
//   }
// };

// sayHello("Dan");

// Задание #5

// function calc(a, b, operation) {
//   switch (operation) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//   }
// }

// console.log(calc(1, 2, "+")); // 3
// console.log(calc(1, 2, "-")); // -1
// console.log(calc(2, 2, "*")); // 4
// console.log(calc(4, 2, "/")); // 2

// Задание #6

// const age = 20;

// console.log(age >= 18 ? 'Взрослый' : 'Детский')

// Задание #7

// const a = 8;
// const b = 7;

// const c = a > b ? a : b;

// console.log(c);

// Задание #1

// const john = {
//   name: "John",
//   age: 24,
//   pet: "dog",
// };

// const ann = {
//   name: "Ann",
//   age: 18,
//   pet: "turtle",
// };

// function hello(obj) {
//   console.log(
//     `Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`
//   );
// }

// function incrementAge(obj) {
//   obj.age = obj.age + 1;
//   console.log(obj.age);
// }

// hello(john);

// incrementAge(ann);

// console.log(Object.entries(john))

// for (property in john) {
//     console.log(`${property}: ${john[property]}`);
// }

// for (const property of Object.values(john)) {
//     console.log(`${property}`);
// }

// Задание #2

// function sum(array) {
//   let sum = 0;
//   for (item in array) {
//     sum += array[item];
//   }
//   console.log(sum);
// }

// const arr = [1, 50, 20, 75, 90];

// sum(arr); // 236

// Задание #3

// const names = ["Danila", "Oksana", "Dementy", "Alice", "Sofia"];

// console.log(names);

// names.pop(names);
// names.shift(names);

// console.log(names);

// Задание #4

// const names = ["Bob", "Klar", "Petya", "Ilya", "Viktoriya"];

// let templateUl = ``;

// let templateLi = ``;

// function htmlLi(names) {
//   for (name in names) {
//     templateLi += `<li>${names[name]}</li>`;
//   }
// }

// function htmlUl() {
//   templateUl = `<ul>${templateLi}</ul>`;
//   console.log(templateUl)
// }

// htmlLi(names);
// htmlUl();

// const arr = ["Bob", "Klar", "Petya", "Ilya", "Viktoriya"];

// const render = (arr) => `<ul>${arr.map((i) => `<li>${i}</li>`).join("")}</ul>`;

// console.log(render(arr));

// Задание #5

// const obj = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// };

// const { age, favColor, height, pet, money } = obj;

// console.log(age);
// console.log(favColor);
// console.log(height);
// console.log(pet);
// console.log(money);

// Задание #6

// const obj = {
//   age: 22,
//   favColor: "red",
//   height: 188,
//   pet: "dog",
//   money: 12300,
// };

// const updateObj = {
//   age: 23,
//   favColor: "blue",
//   money: 11450,
// };

// const obj2 = { ...obj, ...updateObj };
// console.log(obj2);

// Задание #1

// function isPrimeNumber(number) {
//   if (number <= 1) {
//     return false; // 1 и меньшие числа не считаются простыми
//   }

//   if (number <= 3) {
//     return true; // 2 и 3 считаются простыми
//   }

//   // Проверяем, делится ли число нацело на числа от 2 до квадратного корня из числа
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false; // Если число делится нацело, оно не простое
//     }
//   }

//   return true; // Если ни одно число не подошло, число простое
// }

// // Примеры использования:
// console.log(isPrimeNumber(7)); // true
// console.log(isPrimeNumber(17)); // false

// isPrimeNumber(5);

// Задание #2

// function func(num, min, max) {
//   if (num < min) {
//     return min ** 2;
//   } else if (num > max) {
//     return max ** 2;
//   } else if (num < max - (max - min) / 2) {
//     return num ** 2;
//   } else {
//     return Math.floor(num);
//   }
// }

// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8

// Задание #3

// function isPerfectNumber(number) {
//   if (number > 0 && Number.isInteger(number)) {
//     let sumOfDivisors = 0;

//     for (let i = 1; i < number; i++) {
//       if (number % i === 0) {
//         sumOfDivisors += i;
//       }
//     }

//     return sumOfDivisors === number;
//   }
// }

// console.log(isPerfectNumber(6)); // true
// console.log(isPerfectNumber(28)); // true
// console.log(isPerfectNumber(12)); // false
// console.log(isPerfectNumber(16)); // false

// Задание #4

// function getNumberDigit(number, digitPosition) {
//   if (number < 0) {
//     number = -number; // Преобразуем отрицательное число в положительное
//   }

//   let divisor = 1;
//   let currentDigit;

//   // Вычисляем делитель, который соответствует позиции digitPosition
//   for (let i = 1; i <= digitPosition; i++) {
//     divisor *= 10;
//   }

//   // Проверяем, есть ли цифра на заданной позиции
//   if (Math.floor(number / divisor) === 0) {
//     return undefined;
//   }

//   // Извлекаем цифру
//   currentDigit = Math.floor((number % (divisor * 10)) / divisor);
//   console.log(currentDigit);
//   return currentDigit;
// }

// getNumberDigit(123, 0); // 1
// getNumberDigit(123, 1); // 2
// getNumberDigit(123, 2); // 3
// getNumberDigit(1, 2); // undefined

// Задание #1

// const car = {
//   name: "Hendai Solaris",
//   type: "sedan",
//   maxSpeed: "320",
//   color: "red",
// };

// const returnHTML = (car) => {
//   return `
//         <article>
//             <div>
//                 <h2>${car.name}</h2>
//                 <span>${car.type}</span>
//             </div>
//             <div>
//                 <span>Maximum speed:</span>
//                 <span>${car.maxSpeed}</span>
//             </div>
//             <div>
//                 <span>Color:</span>
//                 <span>${car.color}</span>
//             </div>
//         </article>
//     `;
// };

// console.log(returnHTML(car));

// Задание #2

// const sentence = "Hello, how are you?";

// const countWords = (sentence) => {
//   const array = sentence.split(" ");
//   return array.length;
// };

// console.log(countWords(sentence)); // 4

// Задание #3

// const fullName = "John Doe";

// const getInitials = (fullName) => {
//   const array = fullName.split(" ").map((item) => {
//     const littera = item.split('')[0] + '.'
//     return littera
//   });
//   return array.join(' ')
// };

// const initials = getInitials(fullName);
// console.log(initials); // "J. D."

// Задание #4

// const generateGoogleString = (num) => {
//   let google = "google".split("o");
//   let litteralsO = "oo";

//   if (num > 0 || num != 0 || num != 1 || num != 2) {
//     for (let i = 2; i < num; i++) {
//       litteralsO += "o";
//     }
//   }
//   google[1] = litteralsO;
//   return google.join("");
// };

// console.log(generateGoogleString(4));
// // Goooogle

// console.log(generateGoogleString(0));
// // Google

// console.log(generateGoogleString(-2));
// // Google

// Задание #4

// const str = "Hello, Привет!";

// const countVowels = (str) => {
//   let arrLiters = str.match(/[aeiouyаеёиоуыэюя]/g);
//   return arrLiters.length;
// };

// console.log(countVowels(str)); // 4

// Задание #1

// const sumNumbers = (...args) => {
//   let sum = 0
//   for (item of args) {
//     sum += item
//   }
//   return sum
// };

// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15

// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60

// Задание #2

// const findMaxValue = (array) => {
//   if (array.length !== 0) {
//     return Math.max.apply(null, array);
//   } else {
//     return undefined;
//   }
// };

// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(max1); // 5

// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined

// Задание #3

// const calculateAverage = (arr) => {
//   let sum = 0;
//   const count = arr.length;
//   if (count != 0) {
//     for (item of arr) {
//       sum += item;
//     }
//     return sum / count;
//   } else {
//     return 0;
//   }
// };

// const numbers1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(numbers1)); // 3

// const numbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers2)); // 30

// const emptyArray = [];
// console.log(calculateAverage(emptyArray)); // 0

// Задание #4

// const isPalindrome = (str) => {
//   const newStr = str.toLowerCase().replace(/\s/g, "");
//   const reversedStr = str.split("").reverse().join("");

//   return newStr === reversedStr;
// };

// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("radar")); // true
// console.log(isPalindrome("hello")); // false

// Задание #5

// const removeDuplicates = (arr) => {
//   let uniqueArray = [];

//   for (item of arr) {
//     if (!uniqueArray.includes(item)) {
//       uniqueArray.push(item);
//     }
//   }

//   return uniqueArray;
// };

// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers1)); // [1, 2, 3, 4, 5]

// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(numbers2)); // [10, 20, 30, 40, 50]

// const emptyArray = [];
// console.log(removeDuplicates(emptyArray)); // []

// Задание #6

// const createCounter = (value) => {
//   let counter = value;

//   return {
//     inc: () => {
//       return counter++;
//     },
//     dec: () => {
//       return counter--;
//     },
//     get: () => {
//       return counter;
//     },
//   };
// };

// const { inc, dec, get } = createCounter(5);
// console.log(get()); // 5
// inc();
// inc();
// inc();
// dec();
// console.log(get()); // 7

// Задание #1

// const calculateAge = (birthDate) => {
//    const birth = birthDate.getFullYear()
//    const currentYear = new Date().getFullYear()

//    return currentYear - birth
// };

// const birthDate = new Date("1995-02-21");
// const age = calculateAge(birthDate);

// console.log(age);

// Задание #2

// const getDateDifference = (date1, date2) =>
//   Math.abs(date1.getDate() - date2.getDate());

// const date1 = new Date("2027-06-01");
// const date2 = new Date("2027-06-10");
// const difference = getDateDifference(date1, date2);
// console.log(difference); // 9

// Задание #3

// const getTimeUntilDate = (targetDate) => {
//   const now = new Date();
//   const difference = targetDate - now;
//   return {
//     days: Math.round(difference / 1000 / 60 / 60 / 24),
//     hours: Math.round(difference / 1000 / 60 / 60) % 24,
//     minutes: Math.round(difference / 1000 / 60) % 60,
//     seconds: Math.round(difference / 1000) % 60,
//   };
// };

// const targetDate = new Date("2024-01-31T23:59:59");
// const timeUntilTargetDate = getTimeUntilDate(targetDate);
// console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }

// Задание #4

// const isWeekend = (date) =>
//   date.getDay() === 6 || date.getDay() === 0 ? true : false;

// const date1 = new Date("2027-07-10"); // Суббота
// const date2 = new Date("2027-07-12"); // Понедельник

// console.log(isWeekend(date1)); // true
// console.log(isWeekend(date2)); // false

// Задание #5

// const isLeapYear = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isLeapYear = (year) => {
//   const date = new Date(year, 2, 1);
//   date.setDate(date.getDate() - 1);

//   if (date.getDate() === 29) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isLeapYear(2023)); // false
// console.log(isLeapYear(2024)); // true

// Задание #6

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 1);
//   date.setDate(date.getDate() - 1);
//   return date.getDate();
// };

// // июнь 2027
// console.log(getLastDayOfMonth(2027, 5)); // 30

// // февраль 2027
// console.log(getLastDayOfMonth(2027, 1)); // 28

// // январь 2027
// console.log(getLastDayOfMonth(2027, 0)); // 31

// Задание #1

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   getArea() {
//     return Number(Math.PI * Math.pow(this.radius, 2)).toFixed(2);
//   }
// }

// const circle = new Circle(5);
// console.log(circle.getArea()); // "78.54"

// Задание #2

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   priceWithDiscount(discount) {
//     const discountPrice = (this.price * discount) / 100
//     return this.price - discountPrice
//   }
// }

// const product = new Product("Phone", 1000);
// console.log(product.priceWithDiscount(10)); // 900
// console.log(product.priceWithDiscount(20)); // 800

// Задание #3

// class Person {
//   constructor() {
//     this.friends = [];
//   }

//   addFriend(friend) {
//     this.friends.push(friend);
//   }

//   showFriends() {
//     this.friends.map((item) => {
//       console.log(item);
//     });
//   }
// }

// const person = new Person();
// person.addFriend("Иван");
// person.addFriend("Сергей");
// person.addFriend("Игорь");
// person.showFriends(); // Иван, Сергей, Игорь

// Задание #4

// class Animal {
//   constructor(name, favoriteFood) {
//     this.name = name;
//     this.favoriteFood = favoriteFood;
//   }

//   makeSound() {}

//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }

//   sayInfo() {
//     console.log(`${this.name}'s favorite food is ${this.favoriteFood}`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, age) {
//     super(name, age);
//   }

//   makeSound() {
//    console.log("Gav!");
//   }
// }

// class Cat extends Animal {
//   constructor(name, age) {
//     super(name, age);
//   }

//   makeSound() {
//     console.log("Meow");
//   }
// }

// const dog = new Dog("Rex", "Meat");
// const cat = new Cat("Barsik", "Fish");

// cat.makeSound(); // Meow
// dog.makeSound(); // Gav!

// dog.sayName(); // My name is Rex
// cat.sayName(); // My name is Barsik

// dog.sayInfo(); // Rex's favorite food is Meat
// cat.sayInfo(); // Barsik's favorite food is Fish

// Задание #5

// const foo = {
//   a: 5,
//   bar: function () {
//     console.log(this.a);
//   },
//   baz: () => {
//     console.log(this.a);
//   },
// };

// foo.bar();
// foo.baz();

// Задание #6

// const boxFactory = {
//   type: "box",
//   count: 0,
//   produce: function () {
//     this.count++;
//     return "Box №" + this.count;
//   },
// };

// const produceBox = (produceFn) => {
//   const boxName = produceFn();
//   console.log(boxName);
// };

// for (let i = 0; i < 25; i++) {
//   produceBox(boxFactory.produce.bind(boxFactory));
// }

// Задание #1

// console.log("a");
// new Promise((resolve, reject) => {
//   console.log("b");
//   setTimeout(() => {
//     console.log("c");
//     resolve();
//   }, 0);
// }).then(() => console.log("d"));

// console.log("e");
// setTimeout(() => console.log("f"), 0);
// console.log("g");

// Задание #2

// const $elemRoot = document.getElementById("root");
// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Произошла ошибка при получении данных:", error);
//     throw error;
//   }
// };

// fetchData().then((data) => {
//   $elemRoot.insertAdjacentHTML(
//     "afterbegin",
//     // `<ul>${data.map((item) => `<li>${JSON.stringify(item)}</li>`)}</ul>`
//     `<ul>${data.map((item) => JSON.stringify(item))}</ul>`
//   );
//   console.log(data);
// });

// Задание #3

// function sumWithDelay(delay, a, b) {
//   const promise = new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve(a + b);
//     }, delay)
//   );
//   return promise;
// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();

// Задание #4

// const USERS = [
//   { id: "001", name: "Алексей", age: 25 },
//   { id: "002", name: "Иван", age: 28 },
//   { id: "003", name: "Егор", age: 30 },
// ];

// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = USERS.find((user) => user.id === id);
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error("Пользователь не найден"));
//       }
//     }, 2500);
//   });
// }

// async function start() {
//   try {
//     const result = await fetchUser("001");
//     console.log(result); // { id: '001', name: "Алексей", age: 25 }
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// start();
