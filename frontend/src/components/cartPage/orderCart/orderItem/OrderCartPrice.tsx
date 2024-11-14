import CurrentPrice from '../../../currentPrice/CurrentPrice'

import { singleProductType } from '../../../../types/types'

import styles from './OrderCartPrice.module.css'

type ComponentType = {
    product: singleProductType
    isLast: boolean
}

const OrderCartPrice = ({ product, isLast }: ComponentType) => {
    return (
        <div className={`${styles.orderItemPriceBox} ${isLast ? styles.noBorder : ''}`}>
            <div className={styles.orderItemPrice}>
                <p>Price</p>
                <CurrentPrice
                    price={product.product.price}
                    promotion={product.product.promotion.isPromotion}
                    promotionPercent={product.product.promotion.promotionPercent}
                    isBig
                />
            </div>
            <div className={styles.orderItemValue}>
                <p>Value</p>
                <span>${product.totalProductPrice}</span>
            </div>
        </div>
    )
}

export default OrderCartPrice
