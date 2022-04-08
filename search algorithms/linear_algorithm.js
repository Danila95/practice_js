
var time = performance.now(); // засекаем время работы в микросекундах 
let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
let n = null;

function LinearAlgorithm(Arr, n) {

	let count = Arr.length;
	console.log('Arr_length = ' + count);
	  
	for (let i = 0; i <= count-1; i++) {
		if (Arr[i] == n)
			return i;	
		}
	return -1;
}

// n = prompt("Введите число которое вы хотите найти в массиве","");
// n = Number(n);
 n = 50;
 console.log('selected_number = ' + n);
 console.log('index_number = ' + LinearAlgorithm(Arr, n));
 // console.log(Arr.indexOf(LinearAlgorithm(Arr, n)));
// alert(LinearAlgorithm(Arr, n));
//console.log(type of n);

time = performance.now() - time; // вычисляем общее время работы скрипта
time = time / 1000; // переводим время в миллисекунды
console.log('Время выполнения = ', time.toFixed(5) + ' миллисекунд');