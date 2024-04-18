// Пример работы очереди в JS
// Визуальный пример: https://www.cs.usfca.edu/~galles/visualization/QueueArray.html

// const queue = []

// Первый метод
// queue.push(1)  push - вставляет новый элемент в конец массива
// queue.push(2)
// queue.push(3)

// if (queue.length) {
//     queue.shift() // метод shift() - удаляет первый элемент из массива
// }

// console.log(queue)

// Второй метод
const queue = [];

queue.unshift(1); // метод unshift() - вставляет новый элемент в начало массива
queue.unshift(2);
queue.unshift(3);

if (queue.length) {
  queue.pop(); // метод pop() - удаляет последний элемент из массива
}

console.log(queue);

// Первый метод более выигрышный вариант по оптимизации памяти, тк во втором методе, при добавлении элемента в начало массива,
// остальные элементы переиндексируются на одну единицу вправо
