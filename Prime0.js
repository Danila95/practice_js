function Increment() {
	let count = 0;
	return function() {
		count++;
		return count;
	}
}

const addOne = Increment();

console.log(addOne());
console.log(addOne());
console.log(Increment());