let arr = [12, 1, 25, 32, 8, 40, 25, 37, 19, 17,];

 function max_elem(arr) {
	let maxValue = arr[0];
	let valueIndex = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] >= maxValue) {
			maxValue = arr[i];
			valueIndex = i;
			console.log('maxValue = ' + maxValue);
			console.log('valueIndex = ' + valueIndex);
		}
	}
 }

max_elem(arr);