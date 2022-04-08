let arr = [12, 100, 25, 32, 8, 4, 25, 37, 19, 17,];

 function min_elem(arr) {
	let minValue = arr[0];
	let valueIndex = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] <= minValue) {
			minValue = arr[i];
			valueIndex = i;
			console.log('minValue = ' + minValue);
			console.log('valueIndex = ' + valueIndex);
		}
	}
 }

min_elem(arr);