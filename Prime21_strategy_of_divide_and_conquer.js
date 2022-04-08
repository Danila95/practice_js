// Напишите код для функции Sum

let arr = [ 2, 4, 6 ];

// функция реализованная рекурсией
// function Sum(arr) {
// 	if (arr.length == 0)
// 	return arr[0];
// 	else
// 		console.log(arr[0]);
// 		arr.splice(0, 1); // начиная с позиции 0, удалить 1 элемент
// 		console.log(arr[0]);
// 	return arr[0] + Sum(arr); 
// }

function Sum(arr) {	
  return arr.length? arr.splice(0, 1)[0] + Sum(arr) : 0;
}

// функция реализованная циклом
// function Sum() {
// 	var result = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		result += arr[i];
// 	}
// 	return result;
// }

console.log(Sum(arr));

