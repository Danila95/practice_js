// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]

// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]

// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]

// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
]; //  , 'Zena', 'Dan', 'Pit'

function sortStudentsByGroups(arr) {
  const newArr = [];
  const Arr = arr.sort();
  for (let i = 0; i <= arr.length - 1; i++) {
    const obl = i + 1;

    if (obl % 3 === 0) {
      let a = obl - 3;
      let b = obl - 1;

      const subArr = [];

      while (a <= b) {
        subArr.push(Arr[a]);
        a++;
      }
      newArr.push(subArr);
    }
  }

  if (arr.length % 3 === 1 || arr.length % 3 === 2) {
    const remainder = arr.length % 3;
    const reverserArr = Arr.reverse();
    const remainderArr = [];
    console.log(remainder);
    if (remainder) {
      for (let i = 0; i < remainder; i++) {
        remainderArr.push(reverserArr[i]);
      }
      newArr.push(`Оставшиеся студенты: ${remainderArr}`);
    }
  } else {
    newArr.push(`Оставшиеся студенты: -`);
  }

  console.log(newArr);
}

sortStudentsByGroups(students);

// Решение:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zena', 'Dan', 'Pit'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// console.log(sortStudentsByGroups(students))
