// const isBirthdayData: boolean = true
// let ageData: number = 40
// const userNameData: string = 'John'

let salary: number;
salary = 5000

const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}'

const userObj: {
	isBirthdayData: boolean;
	userNameData: string;
	ageData: number
} = JSON.parse(userData)


const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
	if (isBirthdayData) {
		return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`
	} else {
		return 'Error'
	}
}

logBrtMsg(isBirthdayData, userNameData, 45)
