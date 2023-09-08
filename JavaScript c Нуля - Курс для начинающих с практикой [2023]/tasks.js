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

const count = 1000;

for (let i = 0; i < count; i++) {
  if (i % 2 != 0 || i % 12 === 0) {
    console.log(i);
  }
}
