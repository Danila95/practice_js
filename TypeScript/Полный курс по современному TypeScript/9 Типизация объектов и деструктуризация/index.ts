const isBirthdayData: boolean = true
let ageData: number = 40
const userNameData: string = 'John'

const userData = {
	isBirthdayData: true,
	userNameData: 'John',
	ageData: 40,
	messages: {
		error: 'Error'
	}
}

const createError = (msg: string) => {
	throw new Error(msg)
}

const logBrtMsg = ({
	isBirthdayData,
	userNameData,
	ageData,
	messages: { error }
}: {
	isBirthdayData: boolean
	userNameData: string
	ageData: number
	messages: { error: string }
}): string => {
	if (isBirthdayData) {
		return `Congrats ${userNameData.toLocaleUpperCase()}, age: ${ageData + 1}`
	} else {
		return createError(error)
	}
}

console.log(logBrtMsg(userData))
