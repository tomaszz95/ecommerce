import { productType } from '../types/types'

const highestPromotionFilter = (products: productType[]): productType => {
    const productWithHighestPromotion = products.reduce((maxProduct, currentProduct) => {
        return currentProduct.promotion.promotionPercent > maxProduct.promotion.promotionPercent
            ? currentProduct
            : maxProduct
    }, products[0])

    return productWithHighestPromotion
}

export default highestPromotionFilter
