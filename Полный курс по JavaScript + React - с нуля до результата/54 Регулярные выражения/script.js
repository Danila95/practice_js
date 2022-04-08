"use strict";

// new RegExp("pattern", "flags");
// /pattern/f

// const ans = prompt("Введите ваше число");

// const reg = /\d/;

// console.log(reg.test(ans));

// console.log(ans.match(reg));

const str = "My name is R2D2";

console.log(str.match(/\D/gi));

// обратные классы
// \D ищем не цифры
// \W - ищем не буквы

// дигеры
// \d - ищем цифры
// \w - ищем слова, буквы
// \s - ищем пробелы

//флаги
// i - найти вне зависимости от регистра
// g - найти несколько вхождений
// m - многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/\./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"));
