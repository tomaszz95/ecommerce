const countPromotionPrice = (price: number, promotionPercent: number): number => {
    const promotionPrice = Math.floor(price - (price * promotionPercent) / 100)

    return promotionPrice
}

export default countPromotionPrice
