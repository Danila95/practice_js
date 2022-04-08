/* алгоритм быстрой сортировки используется стандарт ES6 (но данный метод не оптимизирован, т.к. 
он несколько раз пробегается по массиву) Лучший случай*/

let arr = [1, 213, 213, 3, 4, 7, 3, 5, 5, 2, 8, 7];

const qsort = arr => {
	if (arr.length < 2)
		return arr;
	const pivotPosition = Math.floor(Math.random() * arr.length);
	console.log(pivotPosition);
	const pivot = arr[pivotPosition];
	const less = arr.filter(value => value < pivot);
	const greater = arr.filter(value => value > pivot);
	const equal = arr.filter(value => value === pivot);
	return [...qsort(less), ...equal, ...qsort(greater)];
};

console.log(qsort(arr));

// алгоритм быстрой сортировки не использует доп. методы Худший случай

const QuickSort = arr => {
	if (arr.length < 2)
		return arr;
	let a = [];
	let b = [];
	let pivot = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot)
			a[a.length] = arr[i];
		else
			b[b.length] = arr[i];
	 }
	return QuickSort(a).concat( pivot,QuickSort(b) );
};

console.log(QuickSort(arr));