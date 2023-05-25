interface Price {
	price: number
	discount?: number
	isInstallment: boolean
	months: number
}

const totalPrice = <T extends Price>({ price, discount, isInstallment, months }: T): void => {
	let newPriceWichDiscount: number
	let priceInstallment: number
	if (discount !== undefined) {
		const priceDiscount = (price * discount) / 100
		newPriceWichDiscount = price - priceDiscount
		console.log('Новая цена с учетом скидки: ' + newPriceWichDiscount)
	}
	if (isInstallment) {
		if (months < 2) {
			console.log('Неправильно введено кол-во месяцев по рассрочке')
		} else if (newPriceWichDiscount) {
			// блок по проверке скидки
			priceInstallment = newPriceWichDiscount / months
			console.log('Цена с учетом рассрочки: ' + priceInstallment.toFixed(2))
		} else {
			priceInstallment = price / months
			console.log('Цена с учетом рассрочки: ' + priceInstallment.toFixed(2))
		}
	}
}

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
