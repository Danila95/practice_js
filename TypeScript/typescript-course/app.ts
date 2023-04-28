let string = 'Hello Typescript'

function transform(str: string, uppercase: boolean): string {
	if (uppercase) {
		return str.toUpperCase()
	}
	return str.toLowerCase()
}

const arrowTransform = (str: string, uppercase: boolean): string => {
	if (uppercase) {
		return str.toUpperCase()
	}
	return str.toLowerCase()
}

let isUppercase = true

console.log(transform(string, isUppercase))
console.log(arrowTransform(string, false))
