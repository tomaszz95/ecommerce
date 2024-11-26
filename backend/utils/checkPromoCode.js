const promoCodes = [
	{ name: 'Promo10', value: 10 },
	{ name: 'Promo15', value: 15 },
	{ name: 'Promo20', value: 20 },
	{ name: 'Promo25', value: 25 },
	{ name: 'Promo30', value: 30 },
]

const checkPromoCode = promoCode => {
	const code = promoCodes.find(code => code.name.toLowerCase() === promoCode.toLowerCase())
    
	return code ? code.value : null
}

module.exports = checkPromoCode
