const isBirthdayData: boolean = true
let ageData: number = 40
const userNameData: string = 'John'

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
// 	if (isBirthdayData) {
// 		return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`
// 	} else {
// 		return 'Error'
// 	}
// }

const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
	if (isBirthdayData) {
		return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`
	} else {
		return 'Error'
	}
}

logBrtMsg(isBirthdayData, userNameData, 45)
